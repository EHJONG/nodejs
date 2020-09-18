exports.createUser = (req, res) => {
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
