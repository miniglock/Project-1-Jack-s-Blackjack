// if i use jquery can use .toggleClass() to assign and unassign class in order to check turn. Use with .hasClass()

/*----- constants -----*/
random name array for player names


/*----- app's state (variables) -----*/
current bet p1, current bet p2, p1 cards, p2 cards, dealer cards, the deck, deal active 


/*----- cached DOM element references -----*/

/*----- event listeners -----*/

/*----- functions -----*/
run init

init
    reset all state variables to default
    activate bet phase
    render

const shuffle = () =>{
    deckArray = deckArray.sort(() => Math.random() - 0.5)
    deal()
    render()
}

deal 
    deal 1 card down and 1 card up to players and dealer from deck
    set all card states
    if dealer card2 === ace call insurance
    if dealer card total === 21 call lose
    call if blackjack
    render
    
bet
    update current bet by 5 for appropriate player
    check if current bet > current wallet
    reduce player wallet by player bet amount
    update play button state
    render

play
    change deal active to yes
    call shuffle
    render

insurance
    pop insurance button
    if dealer has blackjack
    match bet amount and reduce wallet
    call payout insurance
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
    take current state variables and update ui

