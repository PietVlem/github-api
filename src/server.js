const express = require("express");

const server = express();

server.get("*", async (req, res) => {
  

  const html = `
  <html>
    <head>
      <title>Hello</title>
    </head>
    <body>
      123
    </body>
  </html>
  `;

  res.end(html);
});

console.log(`
  You can navigate to http://localhost:8080
`);

server.listen(8080);