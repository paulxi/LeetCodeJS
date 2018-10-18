const licenseKeyFormatting = function(str, num) {
    const newStr = str.split(/-/).join("").toUpperCase();

    let result = "";
    for (let i = 0; i < newStr.length; i++) {
        if (i % num == 0 && i != 0) {
            result = '-' + result;
        }

        const index = newStr.length - 1 - i;
        result = newStr.substring(index, index + 1) + result;
    }

    return result;
};

module.exports = licenseKeyFormatting;
