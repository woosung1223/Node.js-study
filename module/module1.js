const {year, month, date} = require('./variables');

let introduce = (year, month, date) => {
    console.log(`My Birthday is ${year}, ${month}/${date}.`);
};

module.exports = {
    year,
    month,
    date,
    introduce,
};