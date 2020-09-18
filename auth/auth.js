const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;

passport.use(
  new BasicStrategy((id, password, callback) => {
    //  디비에 접근을 해서 아이디랑 비밀번호를 가져와서 확인을 하는 부분
    if (id === "study" && password === "1234") {
      callback(null, id);
    } else {
      callback(null, false);
    }
  })
);

exports.isBasicAuthenticate = passport.authenticate("basic", {
  session: false,
});
