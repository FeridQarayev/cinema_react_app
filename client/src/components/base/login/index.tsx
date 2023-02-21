import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import styled from './login.module.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function Login(): JSX.Element {
  return (
    <div className={styled.login}>
      <div className={styled.login__up}>
        <h4>SIGN IN</h4>
      </div>
      <div className={styled.login__down}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            console.log(values);
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={styled.login__down__form__group}>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                {errors.email != null && (touched.email ?? false) ? <span>{errors.email}</span> : null}
              </div>
              <div className={styled.login__down__form__group}>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" />
                {errors.password != null && (touched.password ?? false) ? <span>{errors.password}</span> : null}
              </div>
              <div className={styled.login__down__form__group}>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
        <div className={styled.login__down__bottom}>
          <span>
            Already have an account?
            <a href="#">Sign In</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
