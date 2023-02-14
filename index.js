console.log("It's life Js but not as we know it.")

const board = [
  [1, 0, 1, 0, 0, 1],
  [0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 0, 1],
  [1, 0, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 1],
  [0, 0, 1, 0, 1, 1],
]

const getCell = (board, y, x) => {
  const row = board[y]
  if (row) {
    return row[x]
  }
}

const updated = () => {
  return board.map((row, y_index) => {
    return row.map((cell, x_index) => {
      const above = getCell(board, y_index - 1, x_index)
      const topRight = getCell(board, y_index - 1, x_index + 1)
      const right = getCell(board, y_index, x_index + 1)
      const bottomRight = getCell(board, y_index + 1, x_index + 1)
      const bottom = getCell(board, y_index + 1, x_index)
      const bottomLeft = getCell(board, y_index + 1, x_index - 1)
      const left = getCell(board, y_index, x_index - 1)
      const topLeft = getCell(board, y_index - 1, x_index - 1)

      const livingNeighbours = [
        above,
        topRight,
        right,
        bottomRight,
        bottom,
        bottomLeft,
        left,
        topLeft
      ].filter((x) => { return x !== undefined })
        .reduce((acc, neighbour) => {
          return neighbour + acc
        }, 0)

      if (!cell && livingNeighbours === 3) {
        return 1
      } else if (cell && (livingNeighbours === 2 || livingNeighbours === 3)) {
        return 1
      } else {
        return 0
      }
    })
  })
}
// console.log(board);
// console.log(updated(board));

[...Array(500).keys()].reduce((theBoard, gen) => {
  console.log(updated(theBoard));
}, board)
