const input1 = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2',];
const input2 = require('./2.json');

const main = (arr) => {
    const result = {
        x: 0,
        y: 0,
        aim: 0,
        sum: null,
    };

    const stats = {
        length: arr.length,
        iterations: 0,
    };

    arr.forEach(val => {
        const [command, count] = val.split(' ');

        if (command === 'forward') {
            // It increases your horizontal position by X units.
            result.x += Number(count);
            // It increases your depth by your aim multiplied by X.
            result.y += Number(count * (result.aim));
        } else if (command === 'down') {
            // down X increases the aim by X units.
            result.aim += Number(count);
        } else if (command === 'up') {
            // up X decreases the aim by X units.
            result.aim -= Number(count);
        }

        stats.iterations++;
    });

    result.sum = result.x * result.y;

    return { result, stats };
};

console.log(main(input2));

