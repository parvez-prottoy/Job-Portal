import bcrypt from "bcrypt";

const users = [
  {
    userName: "Parvez Ahmed",
    email: "parvez@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "employer",
  },
  {
    userName: "Ratul Ahmed",
    email: "ratul@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "candidate",
  },
];

export default users;
