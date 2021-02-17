const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split("")
}

IsogramFinder.prototype.isIsogram = function () {
    // for every letter in word
    return this.word.every((letter, index) => {
        // compare the index of that letter to the index of the first instance of that letter in word
        return this.word.indexOf(letter) === index
    })
}

module.exports = IsogramFinder;
