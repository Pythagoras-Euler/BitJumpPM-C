import store from "../../store";
import { encrypt } from "../rsa";
import { Post, Put } from "../transport";
import { styleType } from "element-plus/es/components/table-v2/src/common";

function signup(userId, Password, email) {
  let userid = String(userId);
  let password = String(Password);
  let cipherPw = encrypt(password);
  return new Post()
    .url("register", userid, cipherPw)
    .headers(null)
    .bodyObject({ email: email })
    .send();
}
function login(userId, Password) {
  let userid = String(userId);
  let password = String(Password);
  let cipherPw = encrypt(password);
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
function newPassword(oldpw, newpw) {
  let userid = String(store.getters.userId);
  let cipherOldPw = encrypt(oldpw);
  let cipherNewPw = encrypt(newpw);
  return new Put()
    .url("password", userid, cipherOldPw, cipherNewPw)
    .bodyObject(null)
    .send();
}
export { signup, login, logout, newPassword };
