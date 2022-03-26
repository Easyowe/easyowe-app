/* eslint-disable camelcase */
const axios = require("axios");

exports.google = async (access_token) => {
  const url = "https://www.googleapis.com/oauth2/v3/userinfo";
  const params = { access_token };
  const response = await axios.get(url, { params });
  const { sub, name, email, picture } = response.data;
  return {
    service: "google",
    picture,
    id: sub,
    name,
    email,
  };
};
