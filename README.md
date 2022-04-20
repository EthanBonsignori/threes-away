# THREES AWAY

### About

Threes Away is a multiplayer dice game requiring 5 6-sided die and 2+ people. The rules are fairly simple, read here: http://rpasmd.org/rms/Dice_Pages/Dice_Game_Threes_Away.htm

### Setup

This is a monorepo that contains both the [Client](/client/) and [Server](/server/) for the game. Browse to the folders to view their respective readmes. For a general overview, the client is built with React and server uses Flask.

### Things to be done

- [ ] Roll dice and display the results
- [ ] _Freeze_ **n** selected die and then allow user to roll (**5 - n**) die
- [ ] Auto-freeze 3's (_optional rule?_)
- [ ] User must freeze at least 1 die per roll
- [ ] Save user's score at the end of their round
- [ ] Rounds and game logic for 2+ players
- [ ] Cont'd game logic for 2+ rounds
- [ ] Hookup web sockets [(socket.io-client)](https://socket.io/docs/v4/client-initialization/)
- [ ] Hookup server sockets [(Flask-SocketIO)](https://flask-socketio.readthedocs.io/en/latest/)
- [ ] Deploy the thing

#### Nice to haves

- [ ] Automatically end user's turn if they cannot get a lower score than one already scored
- [ ] Add betting with antes
- [ ] Allow 2+ players locally
- [ ] Game options. Some ideas: num of rounds, allow for "threes away high" mode (highest score wins), more than 5 dice, minimum/maximum ante, custom dice 😎
- [ ] Database??
- [ ] Accounts???
- [ ] Leaderboards ??????
- [ ] profit.
