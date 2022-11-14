const input1 = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
];
const input2 = require('./3.json')

const main = (input) => {
    const stats = {
        length: input.length,
        iterations: 0,
    };

    const result = {
        gamma: [],
        epsilon: [],
    };

    let binValCounts;

    input.forEach((binary) => {
        if (!binValCounts) {
            binValCounts = new Array(binary.length).fill('').map(() => ({ 0: 0, 1: 0 }));
        }

        binary.split('').forEach((binVal, binIndex) => {
            if (result.gamma[binIndex]) return;

            stats.iterations++;

            binValCounts[binIndex][binVal]++;

            if (binValCounts[binIndex][binVal] > (input.length / 2)) {
                result.gamma[binIndex] = binVal;
                result.epsilon[binIndex] = binVal === '1' ? '0' : '1';
            }
        });
    });

    result.gamma = result.gamma.join('');
    result.epsilon = result.epsilon.join('');
    result.sum = parseInt(result.gamma, 2) * parseInt(result.epsilon, 2)

    return { result, stats };
};

console.log(main(input2));
