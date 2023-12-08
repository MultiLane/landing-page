const ethers = require("ethers");
const axios = require("axios");
const { BACKEND_URL, DASHBOARD_URL } = require("./constant");

if (typeof window !== "undefined") {
  if (typeof window?.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
  } else {
    alert(
      "Please install MetaMask or use a Web3 browser to access this application!"
    );
  }
}

const api = async (path, type, payload) => {
  let res;
  if (type === "GET") {
    res = await axios.get(`${BACKEND_URL}/${path}`, {
      params: payload,
    });
  } else {
    res = await axios.post(`${BACKEND_URL}/${path}`, payload);
  }
  return res.data;
};

export const signMessage = async () => {

};
