const numUniqueEmails = function(emails) {
    const set = new Set();
    for (let email of emails) {
        const atIndex = email.indexOf("@");
        let localName = email.substring(0, atIndex);
        let domainName = email.substring(atIndex + 1);

        const plusIndex = localName.indexOf("+");
        localName = localName.substring(0, plusIndex);
        localName = localName.replace(/\./g, '');

        set.add(localName + '@' + domainName);
    }

    return set.size;
};

module.exports = numUniqueEmails;