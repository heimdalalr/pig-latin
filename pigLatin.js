//Write a function to turn a phrase into pig latin. Give function a word with no punctuation in it, and all letters must be lowercased.

//Rules if the word begins with a consonant move the first letter to the end and ad 'ay' If the word begins with a vowel add 'yay' to the end

// Write your solution below:

function pigLatin(sentence) {
    let words = sentence.split(" ")
    for (let i = 0; i < words.length; i++){
    if (words[i][0] === "a" || words[i][0] === "e" || words[i][0] === "i" || words[i][0] === "o" || words[i][0] ==="u"){
        words[i] += "yay"
    } else {
        words[i] =+ words[i][0]
        words[i] =+ "ay"
        words[i] = words[i].substring(1)
    }
}
console.log(words)
}

let convertedSentence = pigLatin('give me an orange')
console.log(convertedSentence)