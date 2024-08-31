import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { userActions } from '../../store/slices/user/user-slice';
import { toast } from 'react-toastify';
import { textError } from '../../const';

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {login} = useActionCreators(userActions);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };

  let isFormCorrect = false;
  const regularMail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const regularPass = /^[a-zA-Z]+\d+|\d+[a-zA-Z]+$/i;


  if (!regularMail.test(formData.email) || !regularPass.test(formData.password)) {
    isFormCorrect = false;
  } else {
    isFormCorrect = true;
  }


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormCorrect === false) {
      return toast.error(textError.textErrorValidationForm);
    }
    login(formData);
  };


  return (
    <>
      <Helmet>
        <title>6 Sities - login</title>
      </Helmet>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email"
                  name="email" placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password"
                  name="password" placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>

  );

}
export default LoginPage;
