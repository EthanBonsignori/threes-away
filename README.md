# THREES AWAY

### About

Threes Away is a multiplayer dice game requiring 5 6-sided die and 2+ people. The rules are fairly simple, read here: http://rpasmd.org/rms/Dice_Pages/Dice_Game_Threes_Away.htm

#### A Note on _Die_

Those who know me may know how particular I am about my naming conventions. Which is why I thought I'd include a note, [or just let Grammarly do it for me](https://www.grammarly.com/blog/dice-die/#:~:text=Die%20is%20the%20singular%20form,plural%20form%20would%20be%20dies), on _Die_ vs. _Dice_. **Die** is the singular form of **Dice**. As in; you can roll **one die** or **five dice**. That being said, I took great care in my naming of functions and variables in this repo to match their intention as closely as possible. You may come across variables that seem like they are screaming **DIE** at you, but you can rest assured I am _probably_ referring to a singular die.

TL;DR: when _Dice_ is used, it refers to all five dice in play. When _Die_ is used it referes to a single one of those dice.

### Setup

This is a monorepo that contains both the [Client](/client/) and [Server](/server/) for the game. Browse to the folders to view their respective readmes. For a general overview, the client is built with React and server uses Flask.

### Things to be done

- ~~Dice state logic~~

  - [x] ~~Roll dice and display the results~~
  - [x] ~~_Freeze_ **n** selected die and then allow user to roll (**5 - n**) die~~
  - [x] ~~Auto-freeze 3's~~ (_optional rule?_)

- Game state logic

  - Rounds
    - [ ] Must freeze 1 die (Auto frozen 3s count, can't be unfrozen)
    - [ ] Save score each round
    - [ ] Display this info to the user
  - Players
    - [ ] Multiple players logic (setup for sockets)
    - [ ] Save user's score at the end of their round
  - Game
    - [ ] Winner
    - [ ] Betting
    - [ ] Settings

- [ ] Hookup web sockets [(socket.io-client)](https://socket.io/docs/v4/client-initialization/)
- [ ] Hookup server sockets [(Flask-SocketIO)](https://flask-socketio.readthedocs.io/en/latest/)
- [ ] Deploy the thing

#### Nice to haves

- [ ] Automatically end user's turn if they cannot get a lower score than one already scored
- [ ] Add betting with antes
- [ ] Allow 2+ players locally
- [ ] Game options. Some ideas: num of rounds, allow for "threes away high" mode (highest score wins), more than 5 dice, minimum/maximum ante, custom dice ????
- [ ] Database??
- [ ] Accounts???
- [ ] Leaderboards ??????
- [ ] profit.
