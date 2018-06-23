function removeVowels(word) {
  var characters = word.split('');

  var result = [];

  characters.forEach(function (character) {
    if (character === 'a' || character === 'o' || character === 'i' || character === 'e'
      || character === 'u' || character === 'y') {
      result.push(character)
    } else {
      result.push('_')
    }
  })

  return result.join('');
}

module.exports = removeVowels;
