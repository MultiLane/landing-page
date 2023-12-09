const ethers = require("ethers");
const axios = require("axios");
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;

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
  // connect to MetaMask
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await window.ethereum.request({ method: "eth_requestAccounts" });
  // get the user's accounts
  const accounts = await provider.listAccounts();
  // get the user's first account
  const signer = provider.getSigner(accounts[0]);

  // create the message to sign
  let nonce = await api("api/login/", "GET", {
    address: await signer.getAddress(),
  });
  // sign the message
  let message = `Welcome to MultiLane.\nSign this message to login.\nNonce: ${ethers.utils.id(
    String(nonce.nonce)
  )}`;
  const signature = await signer.signMessage(message);
  // print the signature
  let res = await api("api/login/", "POST", {
    address: await signer.getAddress(),
    signature: signature,
  });
  if (res.result) {
    localStorage.setItem("token", res.tokens.access);
    // change the domain to DASHBOARD_URL and pass the token as a query parameter
    console.log(`${DASHBOARD_URL}/?token=${res.tokens.access}`);
    document.location = `${DASHBOARD_URL}/?token=${res.tokens.access}`;
  }
};
