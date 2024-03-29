import { Field, Form, Formik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import backImg from '../../../images/constant/movie-collection.jpg';
import { loginUser } from '../../../services/login';
import styled from './signin.module.scss';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

function SignIn(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className={styled.signin}>
      <main className={styled.signin__main} style={{ backgroundImage: `url(${String(backImg)})` }}>
        <div className={styled.signin__main__container}>
          <div className={styled.signin__main__container__body}>
            <div className={styled.login}>
              <div className={styled.signin__main__container__body__login__up}>
                <h4>SIGN IN</h4>
              </div>
              <div className={styled.signin__main__container__body__login__down}>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={(values, { resetForm }) => {
                    void loginUser(values)
                      .then((res) => {
                        if (res.status === 200) {
                          localStorage.setItem('user', JSON.stringify({ ...res.data.data, password: undefined, email: undefined, __v: undefined }));
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
                      <div className={styled.signin__main__container__body__login__down__form__group}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        {errors.email != null && (touched.email ?? false) ? <span>{errors.email}</span> : null}
                      </div>
                      <div className={styled.signin__main__container__body__login__down__form__group}>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        {errors.password != null && (touched.password ?? false) ? <span>{errors.password}</span> : null}
                      </div>
                      <div className={styled.signin__main__container__body__login__down__form__group}>
                        <button type="submit">Login</button>
                      </div>
                    </Form>
                  )}
                </Formik>
                <div className={styled.signin__main__container__body__login__down__bottom}>
                  <span>
                    Not a member?
                    <Link to={'../signup'}>Sign Up</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Link className={styled.signin__main__container__link} to="../home">
            Back to Home
          </Link>
        </div>
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default SignIn;
