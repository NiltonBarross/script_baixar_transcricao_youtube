# Baixar transcrição do YouTube

**Versão 1**

1. Abra o vídeo no YouTube pelo Chrome ou Edge no computador.
2. Deixe o vídeo aberto; o script tentará expandir a descrição e abrir **Mostrar transcrição** sozinho.
3. Pressione **Ctrl+Shift+J** e abra a aba **Console**.
4. Copie todo o conteúdo de `baixar-transcricao.js`, cole no console e pressione Enter.
5. Abra o `.txt` baixado, com título, URL, texto e horários quando disponíveis.

Funciona com o idioma selecionado no painel. Não instala nada e não envia dados a serviços.
Espera até 15 segundos pelo texto. Se você trocar de vídeo durante a espera, cancela a exportação.
Usa os botões do YouTube, que podem carregar a transcrição pela própria página.
Exporta os trechos carregados; confira o primeiro e o último trecho no arquivo.
Se não houver transcrição, informa o problema. Não transcreve áudio.

Verificação automatizada: `node test-transcricao.cjs`.
A abertura automática e o download foram testados pelo usuário em dois vídeos reais.
Os arquivos gerados continham texto, acentos e horários; a completude não foi comparada trecho a trecho.
A estrutura do YouTube pode mudar e exigir atualização dos seletores.
