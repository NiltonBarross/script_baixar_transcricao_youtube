const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync(`${__dirname}/baixar-transcricao.js`, 'utf8');

async function run({ host = 'www.youtube.com', path = '/watch', rows = [], visible = true, title = 'Aula: ação?', autoOpen = false, delay = 0, navigate = false } = {}) {
  const result = { alerts: [], clicks: 0, removed: 0, revoked: 0, opened: 0, expanded: 0 };
  let ticks = 0;
  const location = { hostname: host, pathname: path, href: `https://${host}${path}?v=example` };
  const panel = { getClientRects: () => visible ? [1] : [], querySelectorAll: () => ticks >= delay ? rows.map(([time, text]) => ({
    querySelector: selector => ({ textContent: selector === '.segment-text' ? text : time })
  })) : [] };
  const button = { click() { result.opened++; visible = true; }, getClientRects: () => [1], textContent: 'Mostrar transcrição' };
  const document = {
    querySelectorAll: selector => selector === 'ytd-transcript-renderer' ? [panel] : [],
    querySelector: selector => selector === 'ytd-watch-metadata h1' ? { textContent: title }
      : selector.includes('#expand') ? { click() { result.expanded++; } }
      : autoOpen ? button : null,
    createElement: () => ({ click() { result.clicks++; result.filename = this.download; }, remove() { result.removed++; } }),
    body: { append() {} }
  };
  await vm.runInNewContext(source, {
    location,
    document, Blob, URL: {
      createObjectURL(blob) { result.blob = blob; return 'blob:test'; },
      revokeObjectURL(url) { assert.equal(url, 'blob:test'); result.revoked++; }
    },
    setTimeout: callback => { ticks++; if (navigate) location.href += 'changed'; callback(); }, alert: message => result.alerts.push(message),
    console: { log() {} }
  });
  return result;
}

(async () => {
  const ok = await run({ rows: [['0:01', 'Olá,\n mundo!'], ['', 'Olá, mundo!'], ['0:03', '  ']] });
  const text = await ok.blob.text();
  assert.ok(text.includes('[0:01] Olá, mundo!\nOlá, mundo!'));
  assert.equal(ok.filename, 'Aula_ ação_.txt');
  assert.equal(ok.clicks, 1);
  assert.equal(ok.removed, 1);
  assert.equal(ok.revoked, 1);
  assert.equal(ok.alerts.length, 0);
  for (const options of [{}, { rows: [['0:01', ' ']] }, { visible: false }, { host: 'youtube.com.evil.test' }, { path: '/' }]) {
    const failed = await run(options);
    assert.equal(failed.clicks, 0);
    assert.equal(failed.alerts.length, 1);
  }
  assert.equal((await run({ title: '', rows: [['', 'texto']] })).filename, 'transcricao.txt');
  assert.equal(ok.opened, 0);
  for (const delay of [0, 3]) {
    const opened = await run({ visible: false, autoOpen: true, delay, rows: [['0:01', 'texto']] });
    assert.equal(opened.opened, 1);
    assert.equal(opened.expanded, 1);
    assert.equal(opened.clicks, 1);
  }
  for (const options of [{ delay: 100 }, { delay: 3, navigate: true }]) {
    const failed = await run({ visible: false, autoOpen: true, rows: [['0:01', 'texto']], ...options });
    assert.equal(failed.clicks, 0);
    assert.equal(failed.alerts.length, 1);
    assert.equal(failed.opened, 1);
  }
  console.log('OK: exportação, Unicode, repetição, nome e falhas.');
})().catch(error => { console.error(error); process.exitCode = 1; });
