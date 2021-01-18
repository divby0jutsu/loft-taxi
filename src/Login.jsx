import React from "react";


class Login extends React.Component {

render(){
  const switchPage = (e, type) => {
    e.preventDefault();
    this.props.navigateTo(type);
  }
  return (
    <form onSubmit={(e) => switchPage(e, 'map')}>
      <h1>Войти</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" size="28"/>
      <label htmlFor="password">Пароль</label>
      <input type="password" name="password" id="password" size="28"/>
      <button type="submit">Войти</button>
      <p>Новый пользователь? <button onClick={(e) => switchPage(e, 'register')}>Регистрация</button></p>
    </form>
  );
}
}

export default Login;

