export const makeDeck = () => {
    let finalDeck: card[] = []
    console.log('making desck')
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
    console.log('finalDeck', finalDeck)
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