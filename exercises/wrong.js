function leftPad(str) {
  return str.length === 1 ? `0${str}` : str;
}

module.exports = function (value) {
  const pounds = Math.floor(value);
  const pence = Math.floor((value - pounds) * 100);
  return [`£${pounds.toLocaleString()}`, leftPad(`${pence}`)];
}
