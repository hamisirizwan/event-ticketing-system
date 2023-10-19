const token = process.env.WHATSAPP_TOKEN;
const axios = require("axios");

//AT CREDENTIALS
// const credentials = {
//   apiKey: process.env.AT_API_KEY,
//   username: process.env.AT_USERNAME,
// };
// // Initialize the SDK
// const AfricasTalking = require("africastalking")(credentials);

// // Get the SMS service
// const sms = AfricasTalking.SMS;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN

const notify = {
  whatsapp: async (number, message) => {
    try {
      await axios.post(
        "https://api.apiwap.com/api/v1/whatsapp/send-message",
        {
          phoneNumber: number,
          message: message,
          type: "text",
        },
        {
          headers: {
            Authorization:
              `Bearer ${WHATSAPP_TOKEN}`,
          },
        }
      );
    } catch (error) {
     
      console.log("error sending whatsapp message", error.message);
    }
  },
  sendImageViaWhatsapp : async (number, url, message) => {
    try {
      await axios.post(
        "https://api.apiwap.com/api/v1/whatsapp/send-message",
        {
          phoneNumber: number,
          message: message,
          type: "media",
          media_type: "image",
          mediaUrl: url
        },
        {
          headers: {
            Authorization:
              `Bearer ${WHATSAPP_TOKEN}`,
          },
        }
      );
    } catch (error) {
      console.log(error)
      console.log("error sending doc via whatsapp", error.message);
    }
  },
  // sms: async function (phone, msg) {
  //   sms
  //     .send({
  //       // Set the numbers you want to send to in international format
  //       to: `+254768793923`,
  //       // Set your message
  //       message: msg,
  //       // Set your shortCode or senderId
  //       from: "AFRICASTKNG",
  //     })
  //     .then(() => {
  //       console.log("sent");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  email: async function (phone, msg) {},
};

module.exports = notify;
