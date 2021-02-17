const PangramFinder = function (phrase) {
  this.phrase = phrase.toLowerCase()
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((letter) => {
    return this.phrase.includes(letter)
  })
}

module.exports = PangramFinder;
