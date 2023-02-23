const token = process.env.WHATSAPP_TOKEN;
const axios = require("axios");

//AT CREDENTIALS
const credentials = {
  apiKey: process.env.AT_API_KEY,
  username: process.env.AT_USERNAME,
};
// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

const notify = {
  whatsapp: async function (phone, msg) {},
  sms: async function (phone, msg) {
    sms
      .send({
        // Set the numbers you want to send to in international format
        to: `+254768793923`,
        // Set your message
        message: msg,
        // Set your shortCode or senderId
        from: "AFRICASTKNG",
      })
      .then(() => {
        console.log("sent");
      })
      .catch((err) => {
        console.log(err);
      });
  },
  email: async function (phone, msg) {},
};

module.export = notify;
