// name: Безымянный function
// outputs: 1
// initialize: // Добавленный здесь код будет исполняться\n// однократно при развертывании узла.\n
// finalize: // Добавленный здесь код будет исполняться при\n// остановке узла или повторном развертывании.\n
// info: 
const Board = require("../");

Board.requestPort((error, port) => {
  if (error) {
    console.log(error);
    return;
  }

  const board = new Board(port.path);

  board.on("ready", () => {
    const pin = 13;
    let state = 1;

    board.pinMode(pin, board.MODES.OUTPUT);

    setInterval(() => {
      board.digitalWrite(pin, (state ^= 1));
    }, 500);
  });
});
return msg;