import React from "react";


class Login extends React.Component {

render(){
  const onSubmit = (e) => {
    e.preventDefault();
    this.props.navigateTo('register');
  }
  return (
    <form onSubmit={onSubmit}>
      <h1>Войти</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" size="28"/>
      <label htmlFor="password">Пароль</label>
      <input type="password" name="password" id="password" size="28"/>
      <button type="submit">Войти</button>
    </form>
  );
}
}

export default Login;

