const fs = require('fs')
const shiki = require('shiki')

shiki
  .getHighlighter({
    theme: 'github-dark'
  })
  .then((highlighter) => {
    const html = highlighter.codeToHtml(
      fs.readFileSync('ValidateUTF8.sol', 'utf-8'),
      'solidity'
    )

    const out = `
<title>Shiki</title>
<link rel="stylesheet" href="style.css">
${html}`

    fs.writeFileSync('index.html', out.trim())

    console.log('done highlighting index.js')
  })
