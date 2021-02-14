export const serverLogin = async (credentials) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

export const addBankCard = async (cardinfo) => {
  console.log(JSON.stringify(cardinfo));
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardinfo),
  }).then((data) => data.json());
};

export const serverRegister = async (credentials) => {
  return fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
};

export const getAddressList = async () => {
  return fetch("https://loft-taxi.glitch.me/addressList", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
};

export const getMapRoute = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${encodeURIComponent(
      address1
    )}&address2=${encodeURIComponent(address2)}`,
    {
      method: "GET",
    }
  ).then((data) => data.json());
};
