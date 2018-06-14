var Board = {
  rows: 5,
  colums: 5,
  getBoard: function () {
    return document.getElementsByClassName('board')[0];
  },
  getPlayButton: function () {
     return document.getElementById('play');
  },
  getCells: function () {
    return document.getElementsByClassName('alive');
  },
  createCells: function () {
    var board = Board.getBoard();
    var html = '';
    var cellCount = Board.rows * Board.colums;
    for (var i = 0; i < (Board.rows*Board.colums); i++) {
      html += '<li></li>';
    }
    board.innerHTML = html;
  },
  updateCells: function (cells) {
    for (var i = 0; i < cells.length; i++) {
      Cell.changeColor(cells[i]);
    }
  }
}
