import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  login: Yup.string().min(2, 'Login musi mieć conajmniej 2 znaki').required('Login jest wymagany'),
  password: Yup.string()
    .min(8, 'Hasło musi mieć conajmniej 8 znaków')
    .required('Hasło jest wymagane')
});

export const NewGradeSchema = Yup.object().shape({
  grade: Yup.number('Ocena musi być cyfrą').min(2).max(5).required('To pole jest wymagane'),
  subject: Yup.string().required('To pole jest wymagane')
});
