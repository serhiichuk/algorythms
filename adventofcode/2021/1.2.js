const input1 = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263,];
const input2 = require('./1.json')

const main = arr => {
    const result = {
        prev: null,
        increased: 0,
        decreased: 0,
        noChange: 0,
    };

    const stats = {
        length: arr.length,
        iterations: 0,
    }

    arr.forEach((val1, index) => {
        const val2 = arr[index + 1];
        const val3 = arr[index + 2];

        if (val2 == null || val3 == null) return;

        const sum = val1 + val2 + val3;

        if (result.prev && result.prev === sum) {
            result.noChange++;
        }

        if (result.prev && result.prev < sum) {
            result.increased++;
        }

        if (result.prev && result.prev > sum) {
            result.decreased++;
        }

        result.prev = sum;
        stats.iterations++;
    });

    return { result, stats };
};

console.log(main(input2));
