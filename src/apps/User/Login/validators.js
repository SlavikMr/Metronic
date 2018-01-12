import {
  requiredValidator,
  emailValidator,
} from 'vb-react-form';

const validators = (form) => {
  const { email, password } = form.fields();
  return {
    email: requiredValidator(email.value).concat(emailValidator(email.value)),
    password: requiredValidator(password.value),
  };
};

export { validators };
