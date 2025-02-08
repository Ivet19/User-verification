const username = "ivet19";
const minimumUsernameLength = 5;
const isValidUsername = username.length >= minimumUsernameLength;

const password = "Bootcamp2025";
const repeatPassword = "Bootcamp2025";
const isRepeatPassword = repeatPassword === password;
const minimumPasswordLength = 8;
const isValidPassword =
  password.length >= minimumPasswordLength &&
  /\d/.test(password) &&
  /[A-ZÀÈÌÒÙÁÉÍÓÚÑ]/.test(password);

let age = 27;
const minimumAdultAge = 18;
const isAdult = age >= minimumAdultAge;

console.log(`El nombre de usuario es válido: ${isValidUsername}
La contraseña es válida: ${isValidPassword}
La repetición de la contraseña es válida: ${isRepeatPassword}
Es mayor de edad: ${isAdult}
  `);
