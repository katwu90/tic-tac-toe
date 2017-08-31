const displayXOr1c1 = function (event) {
  if ($('.r1c1').children().text() === '') {
    $('.r1c1').children().text('x')
    console.log('you clicked!')
  } else {
    console.log('click another box!')
  }
}

module.exports = {
  displayXOr1c1
}
