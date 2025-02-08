const username = "ivet19";
const isValidUsername = username.length >= 5;

const password = "Bootcamp2025";
const repeatPassword = "Bootcamp2025";
const isRepeatPassword = repeatPassword === password;
const isValidPassword =
  password.length >= 8 &&
  /\d/.test(password) &&
  /[A-ZÀÈÌÒÙÁÉÍÓÚÑ]/.test(password);

let age = 27;
const isAdult = age >= 18;

console.log(`El nombre de usuario es válido: ${isValidUsername}
La contraseña es válida: ${isValidPassword}
La repetición de la contraseña es válida: ${isRepeatPassword}
Es mayor de edad: ${isAdult}
  `);
