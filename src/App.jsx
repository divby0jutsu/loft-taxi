import React from 'react';
import { Register } from "./Register";
import { Login } from "./Login";
import { Map } from "./Map";
import { Account } from "./Account";
import "./App.css";



class App extends React.Component {

  

  state = {
    currentPage: "login",
  };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  PAGES = {
    'login': <Login onLogin={()=>this.navigateTo('map')} onRegister={()=>this.navigateTo('register')}/>,
    'register': <Register onLogin={()=>this.navigateTo('login')} onRegister={()=>this.navigateTo('map')}/>,
    'map': <Map/>,
    'account': <Account/>
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
                    this.navigateTo("login");
                  }}
                >
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{this.PAGES[this.state.currentPage]}</section>
        </main>
      </>
    );
  }
}

export default App;
