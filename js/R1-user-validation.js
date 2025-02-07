const userName = "ivet19";
const isUserNameValid = userName.length >= 5;

const password = "Bootcamp2025";
const passwordRepeat = "Bootcamp2025";
const isPasswordRepeat = passwordRepeat === password;
const isPasswordValid =
  password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password);

let age = 27;
const isAdult = age >= 18;

console.log(`El nombre de usuario es válido: ${isUserNameValid}
La contraseña es válida: ${isPasswordValid}
La repetición de la contraseña es válida: ${isPasswordRepeat}
Es mayor de edad: ${isAdult}
  `);
