const ws = new WebSocket('ws://localhost:3000');
const canvas = document.getElementById('canvas');
const ctx = document.getElementById('canvas').getContext('2d');
// let xPosition = canvas.width - 15;
let dataItems = [];

ws.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    // socket.send("My name is John");
  };
  
  ws.onmessage = function(event) {
    dataItems.push(JSON.parse(event.data).price);
    dataItems = [...dataItems.slice(-10)];
    drawBars();
  };
  
  ws.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };
  
  ws.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };

  function drawBars() {
      console.log('dataItems', dataItems);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const reversedArray = [...dataItems].reverse();
      reversedArray.forEach((price, index) => {
        const multiplier = index + 1;
        drawBar(price, multiplier);
      });
  }

  function drawBar(price, multiplier) {
      const xPosition = (canvas.width - (15 * multiplier));
      const yPosition = canvas.height - price;
      ctx.save();
      ctx.fillStyle = "#000000";
      ctx.fillRect(xPosition, yPosition, 15, price);
      ctx.restore();
  }
