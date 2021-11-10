import {
  generateSpecialChars,
  generateCharsAsNumber,
  generateRegularChars,
} from './functions';

export function generateSecurePassword(e) {
  e.preventDefault();

  // Form Values

  let minLengthInput = parseInt(e.target.minLength.value);
  let specialCharsInput = parseInt(e.target.specialCharacters.value);
  let charsAsNumberInput = parseInt(e.target.charactersAsNumber.value);
  let quantOfPasswordsInput = parseInt(e.target.quantityOfPasswords.value);
  let quantOfRegularChars = 0;
  if (minLengthInput > specialCharsInput + charsAsNumberInput) {
    quantOfRegularChars =
      minLengthInput - (specialCharsInput + charsAsNumberInput);
  }

  generateSpecialChars(specialCharsInput);

  let randomSpecialChars = generateSpecialChars(specialCharsInput);

  generateCharsAsNumber(charsAsNumberInput);

  let randomCharsAsNumber = generateCharsAsNumber(charsAsNumberInput);

  generateRegularChars(quantOfRegularChars);

  let randomRegularChars = generateRegularChars(quantOfRegularChars);

  console.log(randomSpecialChars, randomCharsAsNumber, randomRegularChars);
}
