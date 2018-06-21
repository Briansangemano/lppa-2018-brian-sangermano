var GameOfLife = {
  createEmptyBoard: function (rows, cols) {
    var newBoard = [];
    for (var i = 0; i < rows; i++) {
      var row = [];
      for (var j = 0; j < cols; j++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  },
  getBoardFromHTML: function (cells, cols) {
    var board = [];
    var row = [];
    for(var i = 0; i < cells.length; i++){
      var cell = cells[i];
      var isAlive = cell.className === 'alive';
      row.push(isAlive);
      if(i % cols === (cols-1)){
        board.push(row);
        row = [];
      }
    }
    return board;
  },
  getNextStep: function (a, b) {
    for (var i = 0; i < a.length; i++) {
     var row = a[i];
     for (var j = 0; j < row.length; j++) {
       var cell = row[j];
       var willBeAlive = GameOfLife.applyRule(a, i, j)
     }
    }
  },
  applyRule: function (board, posX, posY) {
    console.log(board, posX, posY);
    return true;
  }
};
