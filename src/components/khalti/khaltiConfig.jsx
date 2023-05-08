import mykey from "./khaltiKey";

let config = {
  publicKey: mykey.publicTestKey,
  productIdentity: "1234",
  productName: "Sajilo Futsal",
  productUrl: "http://localhost:5000",
  eventHandler: {
    onSuccess(payload) {
      console.log(payload);
    },

    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
