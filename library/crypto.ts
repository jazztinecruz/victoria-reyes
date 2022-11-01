const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.CRYPTO_KEY);

const crypto = cryptr;

export default crypto;
