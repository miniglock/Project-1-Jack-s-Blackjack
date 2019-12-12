/*----- constants -----*/
random name array for player names


/*----- app's state (variables) -----*/
current bet p1, current bet p2, p1 cards, p2 cards, dealer cards, the deck, game active 


/*----- cached DOM element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
run init

shuffle
    shuffle deck (array.sort(() => Math.random() - 0.5))
    call deal
    render

deal 
    deal 1 card down and 1 card up to players and dealer from deck
    if dealer card2 === ace call insurance
    if dealer card total === 21 call lose
    call if blackjack
    render
    
bet
    update current bet by 5 for appropriate player
    check if current bet > current wallet
    render

play
    change game active to yes
    reduce player wallet by player bet amount
    call shuffle
    render

insurance
    pop insurance button
    if dealer card1 + card2 === 21
    call payout insurance
    call if dealer blackjack
    render

double down
    pop double down button
    if yes double player current bet
    reduce player wallet by player bet amount
    call hit 
    call stay 
    render

hit 
    add one card to player cards from deck
    if card total > 21 call stay call lose
    render

stay
    if player 1 && 2 players player 2 turn 
    if last active player call dealer play
    render

if blackjack
    check if p1/p2 have blackjack
    call payout blackjack
    render

payout blackjack
    calculate appropriate amount
    add amount to wallet
    change game active to no
    render

payout insurance
    calculate appropriate amount
    add amount to wallet
    change game active to no
    render

payout double down
    calculate appropriate amount
    add amount to wallet
    change game active to no
    render

tie 
    if player card total === dealer card total || player && dealer bust increase wallet by current bet
    render

lose


render 
    render all necessary state variables


initialize
    reset all state variables to default