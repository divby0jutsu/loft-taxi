import React from "react";
import { AuthContext } from "./Authentication";
import Authentication from "./Authentication";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("AuthContext", () => {
  describe("#login", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let login;

      render(
        <Authentication>
            <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              login = value.login;
              return null;
            }}
          </AuthContext.Consumer>
        </Authentication>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        login("mail@mail.com", "psw");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("#logout", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logout;
      let login;

      render(
        <Authentication>
          <AuthContext.Consumer>
            {(value) => {
              logout = value.logout;
              login = value.login;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </Authentication>
      );

      act(() => {
        login("valid@email.com", "correctpassword");
        logout();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});
