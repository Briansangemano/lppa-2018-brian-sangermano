console.log('Hola');

var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

window.onload = function () {
  Board.createCells();
  var btnPlay = Board.getPlayButton();
  btnPlay.onclick = play;
}
