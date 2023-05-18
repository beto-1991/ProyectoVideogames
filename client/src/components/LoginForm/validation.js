const regexUsername = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*\d)(?=.*[A-Z])(.{6,})$/;

export function validate(objInputs) {
  const errors = {};
  if (objInputs.username === "") {
    errors.username = "Por favor, complete este campo";
  } else if (!regexUsername.test(objInputs.username)) {
    errors.username = "El nombre de usuario debe ser un email";
  }

  if (!regexPassword.test(objInputs.password)) {
    errors.password = `La contraseña 
        debe tener un numero, 
        una mayuscula y minimo seis caracteres`;
  }

  return errors;
}
