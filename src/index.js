const calculateCost = (rate, months) => {
    let result = 0;
    for(let i = 0; i <= months; i += 1) {
        result += i * rate;
    }
    return result;
}

module.exports = {
    calculateCost
}

