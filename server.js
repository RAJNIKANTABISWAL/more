const express = require("express");
const app = express();
const path = require("path");

function start(PORT) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "server/server.html"))
  });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

  app.get("/commands", (req,res)=>{
    res.sendFile(path.join(__dirname, "server/commands.html"))
  })
}

module.exports.start = start;
