import React from "react";
import styles from './Register.module.css';

export const Register = ({ onLogin, onRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister();
  }
  return (
    <form className={styles.Register} onSubmit={handleSubmit}>
      <h1>Регистрация</h1>
      <label htmlFor="email">Email*</label>
      <input type="email" name="email" id="email" size="28" placeholder="mail@mail.ru"/>
      <label htmlFor="name">Как вас зовут?*</label>
      <input type="text" name="name" id="name" size="38" placeholder="Петр Александрович"/>
      <label htmlFor="password">Придумайте пароль*</label>
      <input type="password" name="password" id="password" size="28" placeholder="*************"/>
      <button  className={styles.Submitbutton} type="submit">Зарегистрироваться</button>
      <p>Уже зарегистрированы? <button className={styles.Loginbutton} onClick={onLogin}>Войти</button></p>
    </form>
  );
  }