# Metro-Programming-Game

Metro-Programming-Game

An metro programming game which player controls the behavior of the lines and carts using JavaScript, and hopefully Blocky from Google. Inspired by [Mini Metro](https://dinopoloclub.com/games/mini-metro/) and [Elevator Saga](http://play.elevatorsaga.com/).



12.25.2019:

Fully Restructured. Change the way of realizing animation to requestAnimationFrame. Add acceleration and deceleration. 

To do:

Game model Logics:

- [ ] check wait at station <= 12
- [ ] count how many people carried
- [ ] randomize stations generation
- [ ] passengers AI:
  - [ ] passengers not going on if cannot reach destination
  - [ ] passengers always goes to the nearest destination due to the time cost even if it requires changing the lines

Game level Logics:

- [ ] check how many lines and carts are built
- [ ] allow building a line or assigning a cart after sometime or with a special condition satisfied
- [ ] allow cancelling a line or cart

Game Art:

- [ ] Adding colored outline for the stations on a line

Website:

- [ ] the layout of the website
  - [ ] a textbox for js script for evalling
    - [ ] maybe use [Ace](https://ace.c9.io/) to improve readability
  - [ ] a button to start animation
  - [ ] a button for adjusting the animation speed
  - [ ] a label for level rules
  - [ ] a label for API documentation