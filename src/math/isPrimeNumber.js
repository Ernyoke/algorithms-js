function* range(start = 0, end = 100) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

const isPrime = number => {
    if (number < 2) {
        return false;
    }
    return (() => {
        for (i of range(2, Math.sqrt(number))) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    })();
}

module.exports = isPrime;