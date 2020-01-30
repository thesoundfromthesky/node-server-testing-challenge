const server = require("./server");

const port = process.env.PORT || 8000;

function onConnect() {
  console.log(`Server on Port:${port}`);
}

server.listen(port, onConnect);
