import React from "react";
import styles from'./Login.module.css';


export const Login = ({onLogin, onRegister}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  }

  return (
    <form className={styles.Login} onSubmit={handleSubmit}>
      <h1>Войти</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" size="28" placeholder="mail@mail.ru"/>
      <label htmlFor="password">Пароль</label>
      <input type="password" name="password" id="password" size="28" placeholder="*************"/>
      <a>Забыли пароль?</a>
      <button className={styles.Submitbutton} type="submit">Войти</button>
      <p>Новый пользователь? <button className={styles.Registerbutton} onClick={onRegister}>Регистрация</button></p>
    </form>
  );
}

