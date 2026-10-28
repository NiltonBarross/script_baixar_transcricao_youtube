(async () => {
  if (!/(^|\.)youtube\.com$/.test(location.hostname) || location.pathname !== '/watch') {
    alert('Abra a página de um vídeo no YouTube e execute novamente.');
    return;
  }

  // shortcut: depende do DOM do YouTube; revisar seletores se a estrutura mudar.
  const clean = element => (element?.textContent || '').replace(/\s+/g, ' ').trim();
  const originalUrl = location.href;
  let expanded = false;
  let opened = false;
  let lines = [];
  for (let attempt = 0; attempt < 60; attempt++) {
    if (location.href !== originalUrl) {
      alert('O vídeo mudou durante o carregamento. Execute novamente no vídeo desejado.');
      return;
    }
    const panel = [...document.querySelectorAll('ytd-transcript-renderer')]
      .find(element => element.getClientRects().length);
    lines = [...(panel?.querySelectorAll('ytd-transcript-segment-renderer') || [])]
    .map(segment => {
      const text = clean(segment.querySelector('.segment-text'));
      const time = clean(segment.querySelector('.segment-timestamp'));
      return text ? `${time ? `[${time}] ` : ''}${text}` : '';
    }).filter(Boolean);
    if (lines.length) break;

    if (!expanded) {
      const expand = document.querySelector('ytd-watch-metadata #description-inline-expander #expand');
      if (expand) {
        expand.click();
        expanded = true;
      }
    }
    if (!opened && !panel) {
      const button = document.querySelector('ytd-watch-metadata ytd-video-description-transcript-section-renderer button')
        || [...document.querySelectorAll('ytd-watch-metadata #description button, ytd-watch-metadata #description [role="button"]')]
          .find(element => /^(mostrar transcri[çc][ãa]o|show transcript)$/i.test(clean(element)));
      if (button?.getClientRects().length) {
        button.click();
        opened = true;
      }
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }

  if (!lines.length) {
    alert('Não foi possível carregar a transcrição em 15 segundos. Confira se o vídeo oferece “Mostrar transcrição”. Se oferecer, abra o painel manualmente e execute novamente.');
    return;
  }

  const title = clean(document.querySelector('ytd-watch-metadata h1')) || 'transcricao';
  const content = `${title}\n${location.href}\n\n${lines.join('\n')}\n`;
  const url = URL.createObjectURL(new Blob(['\uFEFF', content], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `${title.replace(/[<>:"/\\|?*\u0000-\u001F]/g, '_').slice(0, 120).replace(/[. ]+$/g, '') || 'transcricao'}.txt`;
  try {
    document.body.append(link);
    link.click();
    console.log(`Download solicitado: ${lines.length} trechos carregados da transcrição.`);
  } finally {
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
})();
