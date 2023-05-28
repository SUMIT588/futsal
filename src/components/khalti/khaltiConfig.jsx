import axios from "axios";
import myKey from "./khaltiKey";

const config = {
  publicKey: myKey.publicTestKey,
  productIdentity: "123766",
  productName: "Futsal",

  productUrl: "http://localhost:5000",
  
  initiateVerification: async (payload) => {
    try {
      const headers = {
          Authorization: myKey.secretKey,
      };
      const response = await axios.post(
        "http://localhost:5000/api/verifyPayment",
        payload, {headers}
        
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  },
  eventHandler: {
    onSuccess(payload) {
      console.log(payload, "success");
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      config.initiateVerification(data);
      console.log("success baby");
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
