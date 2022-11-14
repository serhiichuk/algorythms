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
const input2 = require('./3.json');

const main = (input) => {
    const stats = {
        length: input.length,
        iterations: 0,
    };

    const result = {
        ['oxygen generator rating']: '',
        ['CO2 scrubber rating']: '',
    };


    const split = (arr, pointer = 0) => {
        const ones = [];
        const zeros = [];

        arr.forEach(binary => {
            if (binary[pointer] === '1') ones.push(binary);
            if (binary[pointer] === '0') zeros.push(binary);
        });

        return [zeros, ones];
    };

    const findByHigher = (val, pointer = 0) => {
        stats.iterations++;

        if (val.length === 1) return val[0];

        const [zeros, ones] = split(val, pointer);

        if (zeros.length < ones.length) return findByHigher(ones, pointer + 1);
        if (zeros.length > ones.length) return findByHigher(zeros, pointer + 1);

        return findByHigher(ones, pointer + 1);
    };

    const findByLower = (val, pointer = 0) => {
        stats.iterations++;

        if (val.length === 1) return val[0];

        const [zeros, ones] = split(val, pointer);

        if (zeros.length < ones.length) return findByLower(zeros, pointer + 1)
        if (zeros.length > ones.length) return findByLower(ones, pointer + 1);

        return findByLower(zeros, pointer + 1);
    };


    result['oxygen generator rating'] = findByHigher(input);
    result['CO2 scrubber rating'] = findByLower(input);

    result.sum = parseInt(result['oxygen generator rating'], 2) * parseInt(result['CO2 scrubber rating'], 2);

    return { result, stats };
};

console.log(main(input2));
