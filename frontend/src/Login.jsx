/* eslint-disable no-console */
import { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

function LoginForm() {
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: yup.object({
      username: yup.string().required('Required'),
      password: yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/api/v1/login', values);
        console.log(response);
        const { data: { token } } = response;
        localStorage.setItem('authToken', token);
        navigate('/');
      } catch (e) {
        setValid(false);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1 className="mb-3">Войти</h1>
      <Form.Group>
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
            isInvalid={!valid}
          />
        </FloatingLabel>
      </Form.Group>
      <FloatingLabel label="Пароль" controlId="password" className="mb-3">
        <Form.Control
          type="password"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.password}
          isInvalid={!valid}
        />
        <Form.Control.Feedback type="invalid" tooltip>Неверное имя пользователя или пароль</Form.Control.Feedback>
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
