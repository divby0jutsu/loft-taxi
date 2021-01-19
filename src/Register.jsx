import React from "react";
import styles from './Register.module.css';

class Register extends React.Component {
  render() {
    const switchPage = (e, type) => {
      e.preventDefault();
      this.props.navigateTo(type);
    }
  return (
    <form className={styles.Register} onSubmit={(e) => switchPage(e, 'map')}>
      <h1>Регистрация</h1>
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" id="email" size="28" placeholder="mail@mail.ru"/>
      <label htmlFor="name">Как вас зовут?*</label>
      <input type="text" name="name" id="name" size="38" placeholder="Петр Александрович"/>
      <label htmlFor="password">Придумайте пароль*</label>
      <input type="password" name="password" id="password" size="28" placeholder="*************"/>
      <button  className={styles.Submitbutton} type="submit">Зарегистрироваться</button>
      <p>Уже зарегистрированы? <button className={styles.Loginbutton} onClick={(e) => switchPage(e, 'login')}>Войти</button></p>
    </form>
  );
  }
}

export default Register;