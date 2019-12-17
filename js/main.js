// // if i use jquery can use .toggleClass() to assign and unassign class in order to check turn. Use with .hasClass()

// /*----- constants -----*/
// random name array for player names
let deck = [
  {
    value: 2,
    image: "card-deck/images/clubs/clubs-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/diamonds/diamonds-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/hearts/hearts-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/spades/spades-r02.svg"
  },
  {
    value: 3,
    image: "card-deck/images/clubs/clubs-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/diamonds/diamonds-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/hearts/hearts-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/spades/spades-r03.svg"
  },
  {
    value: 4,
    image: "card-deck/images/clubs/clubs-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/diamonds/diamonds-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/hearts/hearts-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/spades/spades-r04.svg"
  },
  {
    value: 5,
    image: "card-deck/images/clubs/clubs-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/diamonds/diamonds-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/hearts/hearts-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/spades/spades-r05.svg"
  },
  {
    value: 6,
    image: "card-deck/images/clubs/clubs-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/diamonds/diamonds-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/hearts/hearts-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/spades/spades-r06.svg"
  },
  {
    value: 7,
    image: "card-deck/images/clubs/clubs-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/diamonds/diamonds-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/hearts/hearts-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/spades/spades-r07.svg"
  },
  {
    value: 8,
    image: "card-deck/images/clubs/clubs-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/diamonds/diamonds-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/hearts/hearts-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/spades/spades-r08.svg"
  },
  {
    value: 9,
    image: "card-deck/images/clubs/clubs-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/diamonds/diamonds-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/hearts/hearts-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/spades/spades-r09.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-K.svg"
  },
  {
    value: 11,
    image: "card-deck/images/clubs/clubs-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/diamonds/diamonds-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/hearts/hearts-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/spades/spades-A.svg"
  }
];
const deck1 = [
  {
    value: 2,
    image: "card-deck/images/clubs/clubs-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/diamonds/diamonds-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/hearts/hearts-r02.svg"
  },
  {
    value: 2,
    image: "card-deck/images/spades/spades-r02.svg"
  },
  {
    value: 3,
    image: "card-deck/images/clubs/clubs-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/diamonds/diamonds-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/hearts/hearts-r03.svg"
  },
  {
    value: 3,
    image: "card-deck/images/spades/spades-r03.svg"
  },
  {
    value: 4,
    image: "card-deck/images/clubs/clubs-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/diamonds/diamonds-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/hearts/hearts-r04.svg"
  },
  {
    value: 4,
    image: "card-deck/images/spades/spades-r04.svg"
  },
  {
    value: 5,
    image: "card-deck/images/clubs/clubs-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/diamonds/diamonds-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/hearts/hearts-r05.svg"
  },
  {
    value: 5,
    image: "card-deck/images/spades/spades-r05.svg"
  },
  {
    value: 6,
    image: "card-deck/images/clubs/clubs-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/diamonds/diamonds-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/hearts/hearts-r06.svg"
  },
  {
    value: 6,
    image: "card-deck/images/spades/spades-r06.svg"
  },
  {
    value: 7,
    image: "card-deck/images/clubs/clubs-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/diamonds/diamonds-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/hearts/hearts-r07.svg"
  },
  {
    value: 7,
    image: "card-deck/images/spades/spades-r07.svg"
  },
  {
    value: 8,
    image: "card-deck/images/clubs/clubs-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/diamonds/diamonds-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/hearts/hearts-r08.svg"
  },
  {
    value: 8,
    image: "card-deck/images/spades/spades-r08.svg"
  },
  {
    value: 9,
    image: "card-deck/images/clubs/clubs-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/diamonds/diamonds-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/hearts/hearts-r09.svg"
  },
  {
    value: 9,
    image: "card-deck/images/spades/spades-r09.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-r10.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-J.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-Q.svg"
  },
  {
    value: 10,
    image: "card-deck/images/clubs/clubs-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/diamonds/diamonds-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/hearts/hearts-K.svg"
  },
  {
    value: 10,
    image: "card-deck/images/spades/spades-K.svg"
  },
  {
    value: 11,
    image: "card-deck/images/clubs/clubs-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/diamonds/diamonds-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/hearts/hearts-A.svg"
  },
  {
    value: 11,
    image: "card-deck/images/spades/spades-A.svg"
  }
];

// /*----- app's state (variables) -----*/
// current bet p1, current bet p2, p1 cards, p2 cards, dealer cards, the deck, deal active
let p1CB = 0;
let p2CB = 0;
let p1w = 100;
let p2w = 100;
let dealerTotal = null;
const player1Cards = {
  value: [],
  image: [],
  turnComplete: false
};
const player2Cards = {
  value: [],
  image: [],
  turnComplete: false
};
const dealerHand = {
  value: [],
  image: []
};
let p1Total = 0;
let p2Total = 0;

// /*----- cached DOM element references -----*/
let dealerCards = document.getElementById("dc");
let dcard1 = document.getElementById("dcard1");
let dcard2 = document.getElementById("dcard2");
let dTotal = document.getElementById("dealer-tot");
let p2Cards = document.getElementById("p2cards");
let p2Card1 = document.getElementById("p2card1");
let p2Card2 = document.getElementById("p2card2");
let p2Wallet = document.getElementById("w2");
let p2Bet = document.getElementById("cb2");
let p1Cards = document.getElementById("p1cards");
let p1Card1 = document.getElementById("p1card1");
let p1card2 = document.getElementById("p1card2");
let p1Wallet = document.getElementById("w1");
let p1Bet = document.getElementById("cb1");
let stay1 = document.getElementById("stay1");
let DD1 = document.getElementById("DD1");
let hit1 = document.getElementById("hit1");
let bet1 = document.getElementById("bet1");
let ins1 = document.getElementById("ins1");
let play1 = document.getElementById("play1");
let stay2 = document.getElementById("stay2");
let DD2 = document.getElementById("DD2");
let hit2 = document.getElementById("hit2");
let bet2 = document.getElementById("bet2");
let ins2 = document.getElementById("ins2");
let play2 = document.getElementById("play2");
let player1Total = document.getElementById("p1total");
let player2Total = document.getElementById("p2total");
// /*----- event listeners -----*/
// p1 buttons
document.getElementById("stay1").addEventListener("click", player1Stay);
// document.getElementById("DD1").addEventListener("click");
document.getElementById("hit1").addEventListener("click", hitP1);
document.getElementById("bet1").addEventListener("click", betP1);
document.getElementById("ins1").addEventListener("click", insurance);
document.getElementById("play1").addEventListener("click", player1Play);
// // p2 buttons
// document.getElementById("stay2").addEventListener("click");
// document.getElementById("DD2").addEventListener("click");
document.getElementById("hit2").addEventListener("click", hitP2);
document.getElementById("bet2").addEventListener("click", betP2);
// document.getElementById("ins2").addEventListener("click");
document.getElementById("play2").addEventListener("click", player2Play);

// /*----- functions -----*/
init();
function init() {
  deck = deck1;
  bet1.disabled = false;
  play1.disabled = true;
  DD1.disabled = true;
  ins1.disabled = true;
  hit1.disabled = true;
  stay1.disabled = true;
  bet2.disabled = false;
  play2.disabled = true;
  DD2.disabled = true;
  ins2.disabled = true;
  hit2.disabled = true;
  stay2.disabled = true;
  p1Bet.innerText = 0;
  p1Wallet.innerText = 100;
  p2Bet.innerText = 0;
  p2Wallet.innerText = 100;
  p1Total = 0;
  p2Total = 0;
}
// init
//     reset all state variables to default
//     activate bet phase
//     render

function hitD() {
  dealerHand.value.push(deck[0].value);
  dealerHand.image.push(deck[0].image);
  dcard1.src = dealerHand.image[dealerHand.image.length - 1];
  dealerPlay();
  deck.shift();
  //   player1Cards.value.push(deck[0].value);
  //   player1Cards.image.push(deck[0].image);
  //   p1Card1.src = player1Cards.image[player1Cards.image.length - 1];
  //   deck.shift();
}
function hitP1() {
  player1Cards.value.push(deck[0].value);
  player1Cards.image.push(deck[0].image);
  p1Card1.src = player1Cards.image[player1Cards.image.length - 1];
  deck.shift();
  render();
}
function hitP2() {
  player2Cards.value.push(deck[0].value);
  player2Cards.image.push(deck[0].image);
  p2Card1.src = player2Cards.image[player2Cards.image.length - 1];
  deck.shift();
  render();
}
// hit
//     add one card to player cards from deck
//     if card total > 21 call stay call lose
//     render

function dealerPlay() {
  dcard2.src = dealerHand.image[1];
  dealerTotal = dealerHand.value.reduce((a, b) => a + b, 0);
  if (dealerTotal < 17) {
    hitD();
    console.log("oh yeah");
  } else {
    console.log("oh no");
    // dealerStay();
  }
  render();
}

function deal() {
  player1Cards.value.push(deck[0].value);
  player1Cards.image.push(deck[0].image);
  p1Card1.src = player1Cards.image[0];
  deck.shift();
  if (p2CB > 0) {
    player2Cards.value.push(deck[0].value);
    player2Cards.image.push(deck[0].image);
    p2card1.src = player2Cards.image[0];
    deck.shift();
  }
  dealerHand.value.push(deck[0].value);
  dealerHand.image.push(deck[0].image);
  dcard1.src = dealerHand.image[0];
  deck.shift();
  player1Cards.value.push(deck[0].value);
  player1Cards.image.push(deck[0].image);
  p1card2.src = player1Cards.image[1];
  deck.shift();
  if (p2CB > 0) {
    player2Cards.value.push(deck[0].value);
    player2Cards.image.push(deck[0].image);
    p2card2.src = player2Cards.image[1];
    deck.shift();
  }
  dealerHand.value.push(deck[0].value);
  dealerHand.image.push(deck[0].image);
  deck.shift();
}

function shuffle() {
  deck = deck.sort(() => Math.random() - 0.5);
  deal();
}

function betP1() {
  p1CB += 5;
  p1w -= 5;
  p1Bet.innerText = p1CB;
  p1Wallet.innerText = p1w;
  if (p1CB > 0) {
    play1.disabled = false;
  }
  if (p1w === 0) {
    bet1.disabled = true;
  }
}
function betP2() {
  p2CB += 5;
  p2w -= 5;
  p2Bet.innerText = p2CB;
  p2Wallet.innerText = p2w;
  //   if (p2CB > 0) {
  //     play2.disabled = false;
  //   }
  if (p2w === 0) {
    bet2.disabled = true;
  }
}
// bet
//     update current bet by 5 for appropriate player
//     check if current bet > current wallet
//     reduce player wallet by player bet amount
//     update play button state
//     render

function player1Play() {
  bet1.disabled = true;
  play1.disabled = true;
  DD1.disabled = false;
  ins1.disabled = false;
  hit1.disabled = false;
  stay1.disabled = false;
  shuffle();
  render();
}
function player2Play() {
  if (p1Total > 0) {
    bet2.disabled = true;
    play2.disabled = true;
    DD2.disabled = false;
    ins2.disabled = false;
    hit2.disabled = false;
    stay2.disabled = false;
    render();
  }
}
// play
//     change deal active to yes
//     call shuffle
//     render

function insurance() {
  dealerPlay();
}
// insurance
//     pop insurance button
//     if dealer has blackjack
//     match bet amount and reduce wallet
//     call payout insurance
//     render

// double down
//     pop double down button
//     if yes double player current bet
//     reduce player wallet by player bet amount
//     call hit
//     call stay
//     render

function player1Stay() {
  if (p2CB > 0) {
    play2.disabled = false;
  }
  bet1.disabled = true;
  play1.disabled = true;
  DD1.disabled = true;
  ins1.disabled = false;
  hit1.disabled = true;
  stay1.disabled = true;
  bust();
  dealerPlay();
}
//     if player 1 && 2 players player 2 turn
//     call check for bust
//     call dealer play
//     render

// if blackjack
//     check if p1/p2 have blackjack
//     call payout blackjack
//     render

// check for bust
//     if >21 call lose
// payout blackjack
//     calculate appropriate amount
//     add amount to wallet
//     change game active to no
//     render

// payout insurance
//     calculate appropriate amount
//     add amount to wallet
//     change game active to no
//     render

// payout double down
//     calculate appropriate amount
//     add amount to wallet
//     change game active to no
//     render

// tie
//     if player card total === dealer card total || player && dealer bust increase wallet by current bet
//     render

function p1Lose() {
  bet1.disabled = true;
  play1.disabled = true;
  DD1.disabled = true;
  //   ins1.disabled = true;
  hit1.disabled = true;
  stay1.disabled = true;
}
function p2Lose() {
  bet2.disabled = true;
  play2.disabled = true;
  DD2.disabled = true;
  ins2.disabled = true;
  hit2.disabled = true;
  stay2.disabled = true;
}
// lose
//     alert a message you lost

function render() {
  p1Total = player1Cards.value.reduce((a, b) => a + b, 0);
  player1Total.innerText = p1Total;
  p2Total = player2Cards.value.reduce((a, b) => a + b, 0);
  player2Total.innerText = p2Total;
  dTotal.innerText = dealerTotal;
  if (p1Total > 21) {
    console.log("bust");
    player1Stay();
    p1Lose();
  } else if (p1Total === 21) {
    hit1.disabled = true;
  }
  if (p2Total > 21) {
    console.log("bust");
    // player2Stay();
    p2Lose();
  } else if (p2Total === 21) {
    hit2.disabled = true;
  }
}
// render
//     take current state variables and update
