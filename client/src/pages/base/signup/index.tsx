import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import backImg from '../../../images/constant/movie-collection.jpg';
import styled from './signup.module.scss';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function SignUp(): JSX.Element {
  return (
    <div className={styled.signup}>
      <main className={styled.signup__main} style={{ backgroundImage: `url(${String(backImg)})` }}>
        <div className={styled.signup__main__container}>
          <div className={styled.signup__main__container__body}>
            <div className={styled.signup__main__container__body__register}>
              <div className={styled.signup__main__container__body__register__up}>
                <h4>Sign Up</h4>
              </div>
              <div className={styled.signup__main__container__body__register__down}>
                <Formik
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={(values, { resetForm }) => {
                    // same shape as initial values
                    console.log(values);
                    resetForm();
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className={styled.signup__main__container__body__register__down__form__group}>
                        <label htmlFor="firstName">First name</label>
                        <Field name="firstName" />
                        {errors.firstName != null && (touched.firstName ?? false) ? <span>{errors.firstName}</span> : null}
                      </div>
                      <div className={styled.signup__main__container__body__register__down__form__group}>
                        <label htmlFor="lastName">Last name</label>
                        <Field name="lastName" />
                        {errors.lastName != null && (touched.lastName ?? false) ? <span>{errors.lastName}</span> : null}
                      </div>
                      <div className={styled.signup__main__container__body__register__down__form__group}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        {errors.email != null && (touched.email ?? false) ? <span>{errors.email}</span> : null}
                      </div>
                      <div className={styled.signup__main__container__body__register__down__form__group}>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        {errors.password != null && (touched.password ?? false) ? <span>{errors.password}</span> : null}
                      </div>
                      <div className={styled.signup__main__container__body__register__down__form__group}>
                        <button type="submit">Register</button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className={styled.signup__main__container__body__register__down__bottom}>
                  <span>
                    Already have an account?
                    <Link to={'../signin'}>Sign In</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link className={styled.signup__main__container__link} to={'../home'}>
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
