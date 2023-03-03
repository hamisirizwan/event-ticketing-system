const axios = require("axios");

class Mpesa {
  consumerKey = process.env.MPESA_CONSUMER_KEY;
  secretKey = process.env.MPESA_CONSUMER_SECRET;
  passKey = process.env.MPESA_PASSKEY;
  shortcode = process.env.MPESA_PAYBILL;

  async generateToken() {
    const auth = new Buffer.from(
      `${this.consumerKey}:${this.secretKey}`
    ).toString("base64");

    try {
      const resp = await axios.get(
        "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
        {
          headers: {
            authorization: `Basic ${auth}`,
          },
        }
      );

      return resp.data.access_token;
    } catch (error) {
      console.error(error);
      throw new Error("fetch stk token error");
    }
  }

  async stkPush(phone, amount, ticketId) {
    try {
      //   console.log(ticketId);
      const date = new Date();
      const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

      const password = new Buffer.from(
        this.shortcode + this.passKey + timestamp
      ).toString("base64");

      const token = await this.generateToken();

      //   console.log(`${process.env.CALLBACK_URL}/?ticket=${ticketId}`);
      const response = await axios.post(
        "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
        {
          BusinessShortCode: this.shortcode,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: amount,
          PartyA: phone,
          PartyB: process.env.SHORTCODE,
          PhoneNumber: phone,
          CallBackURL: `${process.env.CALLBACK_URL}/?ticket=${ticketId}`,
          AccountReference: process.env.ACCOUNT,
          TransactionDesc: "etiketi",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //return the resp
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async stkQuery(CheckoutRequestID) {
    try {
      const date = new Date();
      const timestamp =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

      const password = new Buffer.from(
        this.shortcode + this.passKey + timestamp
      ).toString("base64");

      const token = await this.generateToken();

      const response = await axios.post(
        "https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query",
        {
          BusinessShortCode: this.shortcode,
          Password: password,
          Timestamp: timestamp,
          CheckoutRequestID: CheckoutRequestID,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }
}

module.exports = Mpesa;
