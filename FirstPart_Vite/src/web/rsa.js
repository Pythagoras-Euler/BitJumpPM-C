import { JSEncrypt } from "jsencrypt";

function _encrypt(pubKey, sentence) {
  let ec = new JSEncrypt();
  ec.setPublicKey(pubKey);
  return ec.encrypt(sentence);
}

export async function encrypt(sentence) {
  // let {pubKey} = require("../assets/rsa_1024_pub.json")
  const { pubKey } = await import("../assets/rsa_1024_pub.json");
  return _encrypt(pubKey, sentence);
}

async function sha256(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // 编码为（utf-8）Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // 计算消息的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // 将缓冲区转换为字节数组
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // 将字节数组转换为十六进制字符串
  return hashHex;
}

export async function digestSHA256(message) {
  const hashHex = await sha256(message);
  return hashHex;
}