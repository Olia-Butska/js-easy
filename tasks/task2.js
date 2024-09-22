// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let result = '';
  
  
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];

    // Якщо символ не є цифрою, додаємо його до результату
    if (isNaN(char) || char === ' ') {
      result += char;
    }
  }

  return result;
}


console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;