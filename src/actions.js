export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const SAVECARD = "SAVECARD";
export const STORECARD = "STORECARD";
export const REGISTER = "REGISTER";
export const GETADDRESSES = "GETADDRESSES";
export const STOREADDRESSES = "STOREADDRESSES";
export const GETROUTE = "GETROUTE";
export const STOREROUTE = "STOREROUTE";

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
export const register = (credentials) => ({
  type: REGISTER,
  payload: credentials,
});
export const getAddresses = () => ({
  type: GETADDRESSES,
});
export const storeAddresses = (addresses) => ({
  type: STOREADDRESSES,
  payload: addresses,
});
export const getRoute = (travelPoints) => ({
  type: GETROUTE,
  payload: travelPoints,
});
export const storeRoute = (route) => ({
  type: STOREROUTE,
  payload: route,
});
