import auth from "@/store/modules/auth";
import { encrypt } from "../rsa";
import { Post, Put } from "../transport";

function signup(userid, password, email) {
    let userid = String(userid)
    let password = String(password)
    let cipherPw = encrypt(password)
    return new Post()
        .url("register", userid, cipherPw)
        .headers(null)
        .bodyObject({email: email})
        .send()
}
function login(userid, password) {
    let userid = String(userid)
    let password = String(password)
    let cipherPw = encrypt(password)
    return new Post()
        .url("login", userid, cipherPw)
        .headers(null)
        .bodyObject(null)
        // .sendWith((respData, optional) => {
        //     token = respData //? not sure
        //     userid = optional[0]
        //     // TODO: to use these data
        // }, userid)
        .send()
}
function logout() {
    return new Post()
        .url("logout")
        .bodyObject(null)
        .send()
    // // TODO:在这里删除token
}
function newPassword(oldpw, newpw) {
    let userid = String(auth.getters.userId())
    let cipherOldPw = encrypt(oldpw)
    let cipherNewPw = encrypt(newpw)
    return new Put()
        .url("password", userid, cipherOldPw, cipherNewPw)
        .bodyObject(null)
        .send()
}
export {signup, login, logout, newPassword}