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

wss.on('connection', (ws, req) => {
  wss.interval = null;
  wss.ordinalGen = ordinalMaker();

  ws.on('error', () => {
    clearInterval(wss.interval);
  });

  // on ack, start firing off messages every 2 seconds
  ws.on('message', (message) => {
    wss.interval = setInterval(() => {
      if (ws) {
        ws.send(
          JSON.stringify(
            generateData(wss.ordinalGen.next().value)
          )
        )
      }
    }, 2000);
  });
});

server.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});


function generateData(ordinal) {
  const date = new Date();
  date.setDate(date.getDate() + ordinal);

  return {
    date: date.toDateString(),
    index: ordinal,
    value: getRandomInt(50, 150)
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
