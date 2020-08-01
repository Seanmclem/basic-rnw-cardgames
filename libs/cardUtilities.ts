export const makeHandleDeck = () => {
    const deck = makeDeck()
    const shuffled = shuffleLots(10, deck)
    console.log(shuffled)
    // const shuffled1 = doShuffle(deck)
    // const shuffled2 = doShuffle(shuffled1)
    // const shuffled3 = doShuffle(shuffled2)
    debugger
}

const shuffleLots = (shuffleTimes: number, deck: card[]) => {
    // let shuffledCount = 0
    // let shuffledDeck = deck

    // while(shuffledCount < shuffleTimes) {
    //     debugger;
    //     const newDeck = [...shuffledDeck]
    //     shuffledDeck = doShuffle(newDeck)
    //     shuffledCount = shuffledCount + 1
    // }

    //return shuffledDeck

    const one = doShuffle(deck)
    const two = doShuffle(one)
    const three = doShuffle(two)
    const four = doShuffle(three)
    const five = doShuffle(four)
    const six = doShuffle(five)
    const seven = doShuffle(six)
    const eight = doShuffle(seven)
    const nine = doShuffle(eight)
    const ten = doShuffle(nine)
    return ten
}

const doShuffle = (deck: card[]) => {
    const splitDecks = splitDeck(deck)
    const deckIntervals = getDeckIntervals(splitDecks[0])
    return mergeDecks(deckIntervals, splitDecks)
}

export const makeDeck = () => {
    let finalDeck: card[] = []

    suits.forEach(suit => {
        const allRanksSuited: card[]
            = ranks.map(rank => (
                {
                    suit,
                    ...rank
                }
            ))
        finalDeck.push(...allRanksSuited)
    })

    return finalDeck
}

const splitDeck = (deck: card[]): card[][] => {
    const wiggleRoom = Math.ceil(Math.random() * 6)
    const median = 24 + wiggleRoom;

    const deck1 = deck.slice(0, median);
    const deck2 = deck.slice(median, deck.length);

    return [deck1, deck2]
}

const getDeckIntervals = (deck: card[]) => {
    let randomIntervals: number[] = [];

    while(randomIntervals.length != deck.length) {
        const randomNumber = Math.floor(Math.random() * 3) || 1

        randomIntervals.push(randomNumber)
    }
    return randomIntervals
}

const mergeDecks = (intervals: number[], decks: card[][]): card[] => {
    let deck_1 = [...decks[0]]
    let deck_2 = [...decks[1]]
    let deckPosition = 0

    intervals.forEach(interval => {
        deckPosition = deckPosition + interval

        if(deckPosition <= deck_2.length ) {
            const pieceToMove = deck_1.slice(0, interval)
            deck_1.splice(0, interval)
    
            deck_2.splice(deckPosition, 0, ...pieceToMove)
            deckPosition = deckPosition + 1
        } else {
            //debugger;
        }

        //debugger;
    })

    return deck_2
}

interface card {
    suit: string,
    count: number;
    customCounts?: undefined | number[];
    name: string;
}

const suits: string[] = [
    'clubs',
    'diamonds',
    'spades',
    'hearts'
]

interface IRank {
    count: number;
    customCounts?: undefined | number[];
    name: string;
}

const ranks: IRank[] = [
    {
        count: 1,
        name: 'ace'
    },
    {
        count: 2,
        name: 'two'
    },
    {
        count: 3,
        name: 'three'
    },
    {
        count: 4,
        name: 'four'
    },
    {
        count: 5,
        name: 'five'
    },
    {
        count: 6,
        name: 'six'
    },
    {
        count: 7,
        name: 'seven'
    },
    {
        count: 8,
        name: 'eight'
    },
    {
        count: 9,
        name: 'nine'
    },
    {
        count: 10,
        name: 'ten'
    },
    {
        count: 10,
        name: 'jack'
    },
    {
        count: 10,
        name: 'king'
    },
    {
        count: 10,
        name: 'queen'
    },
]