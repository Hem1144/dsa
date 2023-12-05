function countVowels(str) {
  if (str === "") {
    return 0;
  } else {
    const firstChar = str[0].toLowerCase();
    const vowels = "aeiou";

    if (vowels.includes(firstChar)) {
      return 1 + countVowels(str.slice(1));
    } else {
      return countVowels(str.slice(1));
    }
  }
}

const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}": ${vowelCount}`);
