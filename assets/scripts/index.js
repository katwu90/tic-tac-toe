'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const onBoardClick = require('./onBoardClick')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  $('.r1c1').on('click', onBoardClick.displayXOr1c1)
  $('.r1c2').on('click', onBoardClick)
  $('.r1c3').on('click', onBoardClick)
  $('.r2c1').on('click', onBoardClick)
  $('.r2c2').on('click', onBoardClick)
  $('.r2c3').on('click', onBoardClick)
  $('.r3c1').on('click', onBoardClick)
  $('.r3c2').on('click', onBoardClick)
  $('.r3c3').on('click', onBoardClick)
})
