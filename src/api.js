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
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardinfo),
  }).then((data) => data.json());
};
