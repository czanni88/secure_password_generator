import {
  generateSpecialChars,
  generateCharsAsNumber,
  generateRegularChars,
  renderSecurePasswords,
} from './functions';

export function generateSecurePasswords(e) {
  e.preventDefault();

  // Values from the form

  let minLengthInput = parseInt(e.target.minLength.value);
  let specialCharsInput = parseInt(e.target.specialCharacters.value);
  let charsAsNumberInput = parseInt(e.target.charactersAsNumber.value);
  let quantOfPasswordsInput = parseInt(e.target.quantityOfPasswords.value);
  let quantOfRegularChars = 0;
  if (minLengthInput > specialCharsInput + charsAsNumberInput) {
    quantOfRegularChars =
      minLengthInput - (specialCharsInput + charsAsNumberInput);
  }

  let severalSecurePasswords = [];

  for (let i = 0; i < quantOfPasswordsInput; i++) {
    // Each function generate one array of random characters of the same type

    let randomSpecialChars = generateSpecialChars(specialCharsInput);

    let randomCharsAsNumber = generateCharsAsNumber(charsAsNumberInput);

    let randomRegularChars = generateRegularChars(quantOfRegularChars);

    let singleSecurePassword = [
      ...randomCharsAsNumber,
      ...randomSpecialChars,
      ...randomRegularChars,
    ].join('');

    severalSecurePasswords.push(singleSecurePassword);
  }

  console.log(severalSecurePasswords);

  // Function to render the Secure Passwords to the user
  renderSecurePasswords(severalSecurePasswords);

  return severalSecurePasswords;
}
