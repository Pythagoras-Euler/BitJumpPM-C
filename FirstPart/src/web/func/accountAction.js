import { encrypt } from "../rsa";
import { Post } from "../transport";

function signup(userid, password, email) {
    cipherPw = encrypt(password)
    new Post()
        .url("register", userid, cipherPw)
        .headers(null)
        .bodyObject({email: email})
        .send()
}
function login(userid, password) {
    cipherPw = encrypt(password)
    new Post()
        .url("login", userid, cipherPw)
        .headers(null)
        .bodyObject(null)
        .send()
}
function logout() {
    new Post()
        .url("me", "logout")
        .bodyObject(null)
        .send()
    // 在这里删除token
}
export {signup, login, logout}