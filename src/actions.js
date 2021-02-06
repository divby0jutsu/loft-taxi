export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SAVECARD = "SAVECARD";
export const STORECARD = "STORECARD";

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
export const saveCard = (cardinfo) => ({
  type: SAVECARD,
  payload: cardinfo,
});
export const storeCard = (cardinfo) => ({
  type: STORECARD,
  payload: cardinfo,
});
