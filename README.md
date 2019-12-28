# Metro-Programming-Game

Metro-Programming-Game

An metro programming game which player controls the behavior of the lines and carts using JavaScript, and Blocky from Google. Inspired by [Mini Metro](https://dinopoloclub.com/games/mini-metro/) and [Elevator Saga](http://play.elevatorsaga.com/).

Because most of the programming games for children now has a distinct target and detailed steps, it is hard for children to think independently and be motivated to work on a better solution once the target is reached. This game is build to improve the open-ended thinking ability of children.

Embeded [Ace](https://github.com/ajaxorg/ace) and [Google Blockly](https://github.com/google/blockly).

Screenshot:

![](https://i.pinimg.com/originals/93/4b/68/934b682b0624028b8b506ba1c5c762c6.png)

To do:

Game model Logics:

- [x] check wait at station <= 8
- [x] count how many people carried
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
  - [x] a textbox for js script for evaling
    - [x] use Ace to improve readability
  - [ ] a blockly editor
  - [x] a button to start animation
  - [x] a button to stop and clear the map
  - [ ] a button to pause/resume
  - [ ] a button for adjusting the animation speed
  - [ ] a button to change between js and blockly
  - [x] a label for level rules
  - [ ] a link for API documentation

Blockly:
- [ ] Special Document Design -- not OOP
- [ ] DIY blocks
