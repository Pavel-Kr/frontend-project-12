/* eslint-disable no-console */
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1 className="mb-3">Войти</h1>
      <FloatingLabel
        label="Ваш ник"
        controlId="username"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </FloatingLabel>
      <FloatingLabel label="Пароль" controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </FloatingLabel>
      <Button type="submit" variant="outline-primary">Войти</Button>
    </Form>
  );
}

function Login() {
  return (
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-8 col-xl-6">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
