export function generateSecurePassword(e) {
  e.preventDefault();

  const charsDataBase = {
    regularChars: [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ],
    specialChars: ['!', '§', '$', '%', '&', '/', '(', ')', '=', '?', 'ß'],
  };

  // Form Values

  let minLengthInput = parseInt(e.target.minLength.value);
  let specialCharsInput = parseInt(e.target.specialCharacters.value);
  let charsAsNumberInput = parseInt(e.target.charactersAsNumber.value);
  let quantOfPasswordsInput = parseInt(e.target.quantityOfPasswords.value);
  let regularChars = 0;
  if (minLengthInput > specialCharsInput + charsAsNumberInput) {
    regularChars = minLengthInput - (specialCharsInput + charsAsNumberInput);
  }

  console.log(regularChars);

  const generateSpecialChars = (specialCharsInput) => {
    let specialChars = [];

    for (let i = 0; i < specialCharsInput; i++) {
      specialChars.push(
        charsDataBase.specialChars[
          Math.floor(Math.random() * charsDataBase.specialChars.length)
        ]
      );
    }
    return specialChars;
  };
  let specialChars = generateSpecialChars(specialCharsInput);

  const generateCharsAsNumber = (charsAsNumberInput) => {
    let charsAsNumber = [];

    for (let i = 0; i < charsAsNumberInput; i++) {
      charsAsNumber.push(Math.floor(Math.random() * 10));
    }
    return charsAsNumber;
  };
  let charsAsNumber = generateCharsAsNumber(charsAsNumberInput);
  console.log(specialChars, charsAsNumber);
}
