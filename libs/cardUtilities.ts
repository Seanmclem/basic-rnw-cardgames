export const makeHandleDeck = () => {
    const deck = makeDeck()
    console.log('deck', deck)

    const splitDecks = splitDeck(deck)
    console.log('splitDecks', splitDecks)
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
    const wiggleRoom = Math.floor(Math.random() * 6)
    const median = 24 + wiggleRoom;

    const deck1 = deck.slice(0, median);
    const deck2 = deck.slice(median, deck.length);

    return [deck1, deck2]
}

const shuffleDeck = (deck: card[]) => {
    let splitDecks = splitDeck(deck)
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