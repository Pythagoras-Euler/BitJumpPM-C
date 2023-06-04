import store from "../../store";
import { digestSHA256, encrypt } from "../rsa";
import { Post, Put } from "../transport";

async function signup(userId, Password, email) {
  let userid = String(userId);
  let password = String(Password);
  // password = await digestSHA256(password);
  // let cipherPw = await encrypt(password);
  let cipherPw = password;
  return new Post()
    .url("register", userid, cipherPw)
    .headers(null)
    .bodyObject({ email: email })
    .send();
}
async function login(userId, Password) {
  let userid = String(userId);
  let password = String(Password);
  // password = await digestSHA256(password);
  // let cipherPw = await encrypt(password);
  let cipherPw = password;
  return (
    new Post()
      .url("login", userid, cipherPw)
      .headers(null)
      .bodyObject(null)
      // .sendWith((respData, optional) => {
      //     token = respData //? not sure
      //     userid = optional[0]
      //     // TODO: to use these data
      // }, userid)
      .send()
  );
}
function logout() {
  return new Post().url("logout").bodyObject(null).send();
  // // TODO:在这里删除token
}
async function newPassword(oldpw, newpw) {
  let userid = String(store.getters.userId);
  // oldpw = await digestSHA256(String(oldpw));
  // newpw = await digestSHA256(String(newpw));
  // let cipherOldPw = await encrypt(oldpw);
  // let cipherNewPw = await encrypt(newpw);
  let cipherOldPw = oldpw;
  let cipherNewPw = newpw;
  return new Put()
    .url("password", userid, cipherOldPw, cipherNewPw)
    .bodyObject(null)
    .send();
}
export { signup, login, logout, newPassword };
