# Quickstart validation
1. Open a YouTube video in desktop Chrome/Edge.
2. Leave the description collapsed; the updated script opens it and the transcript automatically.
3. Open developer tools Console using Ctrl+Shift+J.
4. Paste baixar-transcricao.js and press Enter.
5. Open the downloaded .txt and compare first/last segments and accents to the panel.

Automated fixture validation: node test-transcricao.cjs. Expected: all checks pass.
Without a transcript or on another site: Portuguese alert and no file.
Live browser verification must be reported separately from fixture validation.
