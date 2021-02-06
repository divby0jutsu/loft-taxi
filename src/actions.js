export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const login = (token) => ({
  type: LOGIN,
  payload: token,
});
export const logout = () => ({
  type: LOGOUT,
});
export const authenticate = (credentials) => ({
  type: AUTHENTICATE,
  payload: credentials,
});
