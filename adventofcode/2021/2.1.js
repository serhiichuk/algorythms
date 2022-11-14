const input1 = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2',];
const input2 = require('./2.json');

const main = (input) => {
    const result = {
        x: 0,
        y: 0,
    };

    const stats = {
        length: input.length,
        iterations: 0,
    };

    input.forEach(val => {
        const [command, count] = val.split(' ');

        if (command === 'forward') {
            // forward X increases the horizontal position by X units.
            result.x += Number(count);
        } else if (command === 'down') {
            // down X increases the depth by X units.
            result.y += Number(count);
        } else if (command === 'up') {
            // up X decreases the depth by X units.
            result.y -= Number(count);
        }

        stats.iterations++;
    });

    result.sum = result.x * result.y;

    return { result, stats };
};

console.log(main(input2));
