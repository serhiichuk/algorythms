const input1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263,];
const input2 = require('./1.json')

const main = arr => {
    const result = {
        prev: null,
        increased: 0,
        decreased: 0,
    };

    const stats = {
        length: arr.length,
        iterations: 0,
    }

    arr.forEach(val => {
        if (result.prev && result.prev < val) {
            result.increased++;
        }

        if (result.prev && result.prev > val) {
            result.decreased++;
        }

        result.prev = val;
        stats.iterations++;
    });

    return { result, stats };
};

console.log(main(input2));
