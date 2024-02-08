// Exercise 1: Length of Last Word
const lengthOfLastWord = function (s) {
  const sentence = s.trim();
  const words = sentence.split(" ");

  const lastWord = words[words.length - 1];
  const lengthOfLast = lastWord ? lastWord.length : 0;

  return lengthOfLast;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6

