const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const app = express();

app.use(express.static(`src`));

app.get('/', (req, res) => {
  res.type = 'html';
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

const server = http.createServer(app);
const wss = new WebSocket.Server({
  server
});

const ordinalGen = ordinalMaker()
setInterval(() => {
  const data = JSON.stringify(generateData(ordinalGen.next().value))
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      client.send(data)
    }
  })
}, 1000)

server.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});

const min = 40;
const max = 260;
function generateData(ordinal) {
  const date = new Date();
  date.setDate(date.getDate() + ordinal);

  return {
    date: date.toDateString(),
    index: ordinal,
    price: getRandomInt(min, max)
  };
}

function* ordinalMaker() {
  var index = 0;
  while(true)
    yield index++;
}

function getRandomInt(min, max) {
  return Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min))
  ) + Math.ceil(min);
}
