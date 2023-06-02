import { JSEncrypt } from 'jsencrypt'

function _encrypt(pubKey, sentence) {
    let ec = new JSEncrypt()
    ec.setPublicKey(pubKey)
    return ec.encrypt(sentence)
}

export function encrypt(sentence) {
    let {pubKey} = require("../assets/rsa_1024_pub.json")
    return _encrypt(pubKey, sentence)
}