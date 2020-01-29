# _Pig Dice_

#### _{Brief description of application}, 01.29.2020_

#### By _**Tiffany Siu and Krista Rutz**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specifications

* The user presses "Play" button
  * Example Input: click on "Play"
  * Example Output: create new Game with two Players, player 1 set to initial current player, and new Turn created
* When new Turn is created, "Roll" button appears
  * Example Input: new Game created or turn ends for other player and other player did not win
  * Example Output: "Roll" button appears
* Current player clicks "Roll"
  * Example Input: clicks on "Roll"
  * Example Output: new Dice created
* New Dice created and dice rolls a number
  * Example Input: new Dice created and rolls
  * Example Output: Number between 1-6 generated
* Current Player rolls a 1
  * Example Input: roll = 1
  * Example Output: Turn ends and running score = 0
* Current Player rolls > 1
  * Example Input: roll = 4
  * Example Output: running score += 4 and player given choice buttons "Roll again" and "Hold"
* Current Player clicks "Hold" after roll
  * Example Input: click on "Hold"
  * Example Output: total score += running score and turn ends
* Current Player clicks "Roll again" after roll
  * Example Input: click on "Roll again"
  * Example Output: new Dice created and dice rolls
* When turn ends, current Player total score evaluated if it is greater than winning score
  * Example Input: total score = 103
  * Example Output: total score > winning score, game ends and current player wins
  * Example Input: total score = 45
  * Example Output: total score < winning score, game continues, current player changes, and new Turn created
* When game ends, show player that won
  * Example Input: game ends
  * Example Output: "Player 1 wins!"




## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2020 **_{List of contributors or company name}_**