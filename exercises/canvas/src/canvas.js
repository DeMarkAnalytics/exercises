const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function () {
  ws.send('ack');
}

ws.onmessage = function (e) {
  const data = JSON.parse(e.data);
  draw(data);
}

const canvas = document.getElementById('canvas');
const context = ctx = canvas.getContext('2d');

function draw (data) {
  ctx.lineTo(data.index, data.value);
  ctx.stroke();
}
