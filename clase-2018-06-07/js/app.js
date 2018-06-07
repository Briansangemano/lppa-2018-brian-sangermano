console.log('Hola');

var play = function () {
  var cells = Board.getCells();
  Board.updateCells(cells);
}

window.onload = function () {
  var btnPlay = Board.getPlayButton();
  btnPlay.onclick = play; 
}
