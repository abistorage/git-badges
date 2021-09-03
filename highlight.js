const fs = require('fs')
const shiki = require('shiki')

shiki
  .getHighlighter({
    theme: 'github-plus-theme'
  })
  .then((highlighter) => {
    const html = highlighter.codeToHtml(
      fs.readFileSync('ABDKMathQuad.sol', 'utf-8'),
      'solidity'
    )

    const out = `
<title>Shiki</title>
<link rel="stylesheet" href="style.css">
${html}`

    fs.writeFileSync('gh-plus.html', out.trim())

    console.log('done highlighting index.js')
  })
