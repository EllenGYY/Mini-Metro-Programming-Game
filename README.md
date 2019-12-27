# Metro-Programming-Game

Metro-Programming-Game

An metro programming game which player controls the behavior of the lines and carts using JavaScript, and hopefully Blocky from Google. Inspired by [Mini Metro](https://dinopoloclub.com/games/mini-metro/) and [Elevator Saga](http://play.elevatorsaga.com/).



12.25.2019:

Fully Restructured. Change the way of realizing animation to requestAnimationFrame. Add acceleration and deceleration. 

12.27.2019:

![](https://i.pinimg.com/originals/43/36/4c/43364c076b551be5ed11fab186addd03.png)

![](https://i.pinimg.com/originals/fb/cb/b5/fbcbb59bf369e2a7ee7200cc4d0791a0.png)

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
  - [x] a textbox for js script for evalling
    - [x] maybe use [Ace](https://ace.c9.io/) to improve readability
  - [x] a button to start animation
  - [ ] a button for adjusting the animation speed
  - [ ] a label for level rules
  - [ ] a label for API documentation