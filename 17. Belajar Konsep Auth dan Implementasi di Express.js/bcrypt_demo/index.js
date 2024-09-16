const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  //   const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, 10);
  console.log(salt);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("login berhasil");
  } else {
    console.log("login gagal");
  }
};

hashPassword("fr33Mint74_"); // $2b$10$hDc1ZwHda7PcgULedyPmOONkakAiVMbHkm7ns8KFihUe5p0rPbAvi
login(
  "fr33Mint74_",
  "$2b$10$hDc1ZwHda7PcgULedyPmOONkakAiVMbHkm7ns8KFihUe5p0rPbAvi"
);
