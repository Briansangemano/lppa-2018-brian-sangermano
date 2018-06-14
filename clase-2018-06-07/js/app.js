console.log('Holu');

var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

var init = function () {
  Board.createCells();
  var cells = Board.getCells();
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = Cell.toggle
  }
  // var btnPlay = Board.getPlayButton();
  // btnPlay.onclick = play;
}

window.onload = init;
