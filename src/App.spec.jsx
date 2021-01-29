import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import { createMemoryHistory } from 'history';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import Authentication from "./Authentication";
import { AuthContext } from "./Authentication";
import { act } from "react-dom/test-utils";
import Enzyme from 'enzyme';
import { Login } from "./Login";
import { Button, Typography, Tab, FormLabel, TextField } from "@material-ui/core";
import { PropTypes } from 'prop-types';
import Map from './Map';
import { Nav } from './Nav';


jest.mock("./Map", () => () =>{<div>Map content</div>});
jest.mock("./Account", () => ({ Account: () => <div>Profile content</div> }));



describe("App", () => {

  it("renders correctly", () => {
    const { container } = render(<Router><App /></Router>);
    expect(getByText(container, "Email")).toBeTruthy();
  });

  App.contextTypes = {
    isLoggedIn: PropTypes.bool
  };

  it("opens map page after login", () => {
    const wrapper = Enzyme.shallow(<App />, {context: {isLoggedIn: true}});
    expect(wrapper.contains(<Map/>)).toEqual(true);
  });

  it("renders Login form when user signed out", () => {
    const wrapper = Enzyme.shallow(<App />, {context: {isLoggedIn: true}});
    expect(wrapper.contains(<Map/>)).toEqual(true);
  });


  describe("when clicked on navigation buttons", () => {
    const history = createMemoryHistory();
    history.push("/map");
    const { getByText, container } = render(
    <AuthContext.Provider value={{ isLoggedIn: true }}>
      <Router history={history}>
        <App />
      </Router>
    </AuthContext.Provider>
  );
  expect(container.innerHTML).toContain("Map content");

    
    it("opens map pager", () => {
     const { container } = render(
        <AuthContext.Provider value={{isLoggedIn: true}}>
          <Router>
          <App />
          </Router>
        </AuthContext.Provider>
      );
      expect(getByText(container, "Map content")).toBeTruthy();
    });


    it("opens map page after", () => {
      let isLoggedIn;
      let login;
      let logout;
      const component = Enzyme.mount(
        
          <AuthContext.Provider value={true}><Router><App/></Router></AuthContext.Provider>
        
      );

      

      expect(component.contains(<Map/>)).toEqual(true);
      act(() => {
        component.find(TextField).at(0).simulate('change', { target: { value: 'mail@mail.com' } });
      });
      act(() => {
        component.find(TextField).at(1).simulate('change', { target: { value: 'psw' } });
      });

      act(() => {
        component.find(Button).at(0).simulate('click');
      });

      component.find("form").simulate("submit");

      expect(component.contains(<Map/>)).toEqual(true);

 
      
    });
  });
});