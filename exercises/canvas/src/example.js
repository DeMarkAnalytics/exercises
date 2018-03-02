const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function () {
  ws.send('ack');
}

const canvas = document.getElementById('canvas');

// GOAL - handle messages from the websocket and draw the data onto the canvas
// try handle websocket message and draw onto the canvas
// note - websocket sends {date, index, value}
