const addBinary = function(a, b) {
    let result = '';
    let carrier = '0';
    let index = 0;

    while (index < a.length || index < b.length) {
        let achar = '0';
        let bchar = '0';

        if (index < a.length) {
            achar = a.charAt(a.length - index - 1);
        }

        if (index < b.length) {
            bchar = b.charAt(b.length - index - 1);
        }

        if (achar === bchar) {
            result = carrier + result;
            carrier = achar;
        } else {
            if (carrier === '0') {
                result = '1' + result;
            } else {
                result = '0' + result;
            }
        }

        index += 1;
    }

    if (carrier === '1') {
        result = '1' + result;
    }

    return result;
};

module.exports = addBinary;
