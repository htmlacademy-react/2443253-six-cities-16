import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useActionCreators } from '../../store/hooks/useActionCreators';
import { userActions } from '../../store/slices/user/user-slice';

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const {login} = useActionCreators(userActions);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email"
                  name="email" placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password"
                  name="password" placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
