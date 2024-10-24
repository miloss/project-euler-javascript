
// Using [names.txt], a 46K text file containing over five-thousand first 
// names, begin by sorting it into alphabetical order. Then working out the 
// alphabetical value for each name, multiply this value by its alphabetical 
// position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is
// worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN 
// would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

function calculateNameScores(names) {
    var score = 0, len = names.length;
    while (len--) {
        score += (len+1) * wordValue(names[len]);
    }
    return score;
}

function wordValue(word) {
    var alphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var value = 0, length = word.length;
    while (length--) {
        value += alphabet.indexOf(word[length]);
    }
    return value;
}

var fs = require('fs');//Node
fs.readFile('names.txt', {
    encoding: 'UTF-8'
}, function(err, data){
    var names = data.replace(/"/g, '').split(',');
    names.sort();
    console.log( calculateNameScores(names) );
});
