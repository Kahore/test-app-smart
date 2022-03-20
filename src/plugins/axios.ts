import axios from "axios";

const md5 = require("md5");
const apiTS = 1;

export const marvelPublic = axios.create({
  baseURL: `${process.env.REACT_APP_API_MARVEL}`,
  params: {
    ts: apiTS,
    apikey: `${process.env.REACT_APP_API_KEY_PUBLIC_MARVEL}`,
    hash: md5(
      apiTS +
        `${process.env.REACT_APP_API_KEY_PRIVATE_MARVEL}` +
        `${process.env.REACT_APP_API_KEY_PUBLIC_MARVEL}`
    ),
  },
});
