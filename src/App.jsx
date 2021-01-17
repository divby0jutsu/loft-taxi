import React from 'react';
import Register from "./Register";
import Login from "./Login";
import { Map } from "./Map";
import { Account } from "./Account";
import { LogOut } from "./LogOut";
import "./App.css";

class App extends React.Component {

  state = {
    currentPage: "login",
  };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  redirect (type) {
    switch (type) {
      case "map": return <Map/>;
      case "account": return <Account/>;
      case "logout": return <LogOut/>;
      case "register":
        return <Register navigateTo={this.navigateTo.bind(this)}/>;
      case "login":
        return <Login navigateTo={this.navigateTo.bind(this)}/>;
      default:
        return <Login navigateTo={this.navigateTo.bind(this)}/>;
    }
  }

  render() {

    
   

    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Карта
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("account");
                  }}
                >
                  Профиль
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("logout");
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{this.redirect(this.state.currentPage)}</section>
        </main>
      </>
    );
  }
}

export default App;
