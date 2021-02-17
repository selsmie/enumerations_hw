const AnagramFinder = function (word) {
    this.word = word
    this.split_word = this.word.toLowerCase().split("")
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    //iterate through otherWords
    return otherWords.filter((otherWord) => {
        //convert otherWord to lower case and split
        let check_word = otherWord.toLowerCase().split("")
        // if check_word and split_word are the same length then good
        if (check_word.length === this.split_word.length) {
            // if otherWord is not this.word
            if (otherWord !== this.word) {
                return check_word.every((letter) => {
                    return this.word.includes(letter)
                })
            }
        }
    })
}

module.exports = AnagramFinder;
