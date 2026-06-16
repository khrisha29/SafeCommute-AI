require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const twilio = require('twilio');

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE;

console.log("SID:", sid);
console.log("Token length:", token ? token.length : 0);
console.log("From:", from);

const client = twilio(sid, token);

async function test() {
  try {
    console.log("Sending SMS...");
    const resSMS = await client.messages.create({
      body: "Test from SafeCommute AI SMS",
      from: from,
      to: `+919876543211` // Replace with a test number if needed
    });
    console.log("SMS Result:", resSMS.sid);
  } catch (err) {
    console.error("SMS Error:", err.message);
  }
}

test();
