let user = require("../models/user");
const crypto = require("crypto");
const passport = require("passport");

exports.createUser = (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;

  //   const hash = crypto.createHash("sha512");
  //   hash.update(password);
  //   let hash_password = hash.digest("hex");

  let key = "Howlkey";
  const ciper = crypto.createCipher("aes192", key);
  const deciper = crypto.createDecipher("aes192", key);
  let encrypt_password = ciper.update(password, "utf8", "hex");

  encrypt_password += ciper.final("hex");

  new user({
    userName: userName,
    password: encrypt_password,
  }).save((err, doc) => {
    if (doc) {
      console.log(doc);
      let target = doc.password;

      let decryped = deciper.update(target, "hex", "utf8");
      decryped += deciper.final("utf8");

      console.log("복호화 : ", decryped);

      console.log("zzz");
    }
  });

  res.send("user가 생성 되었습니다.");
};

exports.readUser = (req, res) => {
  res.send("user가 확인 되었습니다.");
};

exports.updateUser = (req, res) => {
  res.send("user가 수정 되었습니다.");
};

exports.deleteUser = (req, res) => {
  res.send("user가 삭제 되었습니다.");
};
