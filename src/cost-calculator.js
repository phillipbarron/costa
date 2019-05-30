const calculateCost = (rateOfIncrease, months) => {
    [rateOfIncrease, months].forEach(arg => {
        if(isNaN(arg) || Array.isArray(arg)) throw new Error('non-numerical argument supplied')
    });
    let result = 0;
    for(let i = 0; i <= months; i += 1) {
        result += i * rateOfIncrease;
    }
    return result;
}

module.exports = {
    calculateCost
}

