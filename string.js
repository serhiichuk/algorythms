const str = 'sssomewereitlongstringanymorewithbrknwrd';

const dict = {
    it: 'це',
    some: 'якесь',
    were: 'де',
    somewere: 'десь',
    long: 'довго',
    string: 'строка',
    with: 'з',
    broken: 'зламано',
    word: 'слово',
    any: 'будь-який',
    more: 'більше',
    anymore: 'більше',
}

const dict2 = {
    a: {
        an: {
            any: {
                $v: 'будь-який',
                anym: {
                    anymo: {
                        anymor: {
                            anymore: {
                                $v: 'більше',
                            }
                        }
                    }
                }
            }
        }
    },
    more: 'більше',
    broken: 'зламано',
    some: 'якесь',
    somewere: 'десь',
    string: 'строка',
    long: 'довго',
    were: 'де',
    with: 'з',
    word: 'слово',
}

const minWordLength = 2;
const maxWordLength = 8;

const parse = (str) => {
    let curr = str[0];
    let prev = '';
    let index = 0;

    while (curr) {
        if (dict[curr]) {
            str = s
        }
    }

    for(let i = 0; i < str.length; i++) {
        w += str[i];

        
    }
}