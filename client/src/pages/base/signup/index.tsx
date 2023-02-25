import { Field, Form, Formik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import backImg from '../../../images/constant/movie-collection.jpg';
import { createUser } from '../../../services/create.user';
import styled from './signup.module.scss';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function SignUp(): JSX.Element {
  const navigate = useNavigate();
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
                    void createUser(values)
                      .then((res) => {
                        if (res.status === 201) {
                          localStorage.setItem(
                            'user',
                            JSON.stringify({ ...res.data.data, password: undefined, email: undefined, lastName: undefined, __v: undefined })
                          );
                          toast.success(res.data.message);
                          navigate('../home');
                        } else toast.error(res.data.message);
                      })
                      .catch((error) => {
                        toast.error(error.response.data.message);
                      });
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default SignUp;
