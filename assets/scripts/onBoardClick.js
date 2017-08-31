'use strict'
const displayX = function (event) {
  if ($(event.target).children('p').text() === '') {
    $(event.target).children('p').text('X')
    console.log('you clicked!')
  } else {
    console.log('click another box!')
  }
  console.log(event.target)
}

const displayO = function (event) {
  if ($(event.target).children('p').text() === '') {
    $(event.target).children('p').text('O')
    console.log('you clicked!')
  } else {
    console.log('click another box!')
  }
  console.log(event.target)
}

const turn = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let cells = ['', '', '', '', '', '', '', '', '']

let game = function () {
  for (let i = 0; i < turn.length; i++) {
    if (turn[i] % 2 === 0) {
      $(() => { $('.r1c1').on('click', displayX) })
    }
  }
}

module.exports = {
  displayX,
  displayO
}
