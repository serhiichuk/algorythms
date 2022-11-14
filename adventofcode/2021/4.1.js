const input1 = {
    numbers: [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1],
    cards: [
        [
            [22, 13, 17, 11, 0],
            [8, 2, 23, 4, 24],
            [21, 9, 14, 16, 7],
            [6, 10, 3, 18, 5],
            [1, 12, 20, 15, 19],
        ],

        [
            [3, 15, 0, 2, 22],
            [9, 18, 13, 17, 5],
            [19, 8, 7, 25, 23],
            [20, 11, 10, 24, 4],
            [14, 21, 16, 12, 6]
        ],

        [
            [14, 21, 17, 24, 4],
            [10, 16, 15, 9, 19],
            [18, 8, 23, 26, 20],
            [22, 11, 13, 6, 5],
            [2, 0, 12, 3, 7],
        ]
    ]
};
//const input2 = require('./4.json');

const main = (input) => {
    const stats = {
        length: input.length,
        iterations: 0,
    };

    const result = {};

    const includes = (arr, val) => {
        const memo = {};

        if (memo[val] !== undefined) return memo[val];

        for (const el of arr) {
            stats.iterations++;
            if (el === val) {
                memo[val] = true;
                return memo[val];
            }
        }

        if (memo[val] === undefined) memo[val] = false;

        return memo[val];
    };
//    let last;
//    let matchedRow;
//
//    const findWinner = (cards) => {
//        return cards.find(card => {
//            return card.some(row => {
//                const res = row.every(el => includes(input.numbers, el));
//                if (res) {
//                    matchedRow = row
//                    last = input.numbers.reverse().find(e => includes(input.numbers, e))
//                }
//                return res;
//            })
//        });
//    };


    const filterCards = (cards, i = 0) => {
        if (cards.length === 1) return cards[0];

        const matchedCards = [];

        for (const card of cards) {
            const matchedCard = [];

            for (const row of card) {
                const val = row[i];
                console.log(val, row);
                if (includes(input.numbers, val)) matchedCard.push([...row])
            }

            if (matchedCard.length) {
                matchedCards.push(matchedCard);
            }
        }

        return filterCards(matchedCards, i + 1);
    };

    console.log(filterCards(input.cards));

    return { result, stats };
};

console.log(main(input1));
