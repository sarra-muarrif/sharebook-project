const crypto = require("crypto");

function hashPassword(password, salt) {
  return crypto.createHmac("sha256", salt).update(password).digest("hex");
}

module.exports = { hashPassword };
