# Tic Tac Toe

## Technologies Used
- HTML/CSS/SASS/Bootstrap
- DOM manipulation
- Javascript/JQuery/AJAX
- JSON
- API
- CRUD
- User Token Authentication
- Git/Github

## Plan & Strategy
My first step in tackling this project was analyzing and planning how to take the Tic-Tac-Toe game board and use that to determine the winner. I determined that I will need an array that records all the moves from the game board in order to determine the winner. Next, I listed out all the winning possibilities and put that into a conditional statement for my `checkWin` function. The checkWin function will need to run after every move to check if there is a winner after each player's turn.

Next, I created and designed an empty game board. I used Bootstrap to create my game board because it is the most efficient way to display a grid. Each `div` on the grid has a unique id that corresponse to the index of the `cells` array which is necessary for updating the game API. Next I added an event listener for clicks on the Tic-Tac-Toe grid and invokes the function `game`. The `game` function will add either an `x` or `o` to the board depending on whose turn it is. I used a counter that starts at 0 and adds one after each turn, when the counter is even `ie: (% 2 === 0)` then it is Player X's turn and odd is Player O's turn.

At each player's turn, the `game` function updates the API on the move that the player made with a PATCH request. Then the `checkWin` function is invoked to check for whether there was a winner after the player made a move. If there is a winner then the game ends, if there is no winner then the `checkWin` function will see if there was a tie. A tie is determined by whether there has been 9 moves made. If there is no winner and 9 moves have been made then it is a tie. Otherwise, the `checkWin` function will tell the user which player's turn it is.

Another strategy that I used very often is `console.log()`. Every step of the way, I used `console.log` to check what is being put out. It is very helpful for debugging!

## Wireframes
- [Initial Wireframe](https://i.imgur.com/v22wWOa.jpg?1)
- [Current Wireframe](https://i.imgur.com/9KhQCnw.jpg)

## User Stories
- As a user, I can create an account.
- As a user, I can sign in.
- As a user, I can change my password.
- As a user, I can sign out.
- As a user, I can see my completed games.
- As a user, I can click on the game board to display X's and O's
- As a user, I can play Tic-Tac-Toe.
- As a user, I can start a new game.
- As a user, I will know whose turn it is (player X or player O)
- As a user, I will know when a player has won the game.

## Unsolved Problems
One unsolved problem I have is when I sign in and then sign out, the message
`"Directions: Click Start New Game to play!"` still appears on the screen. I have
tried hiding it on success of signing out but it does not work which is strange
since I hide and show many other divs and text after signing out.
