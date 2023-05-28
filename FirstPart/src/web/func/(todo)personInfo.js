import { Get, Put } from "../transport";

function getPersonInfo(userid) {
    new Get()
        .url("user", String(userid))
        .url("info")
        .sendWith((resData) => {
            // TODO: to use these data
            return resData//transClasses.User
        })
}
function getAllPersonInfo(name=null) {
    let getMethod = new Get()
    getMethod.url("user", "list")
    if (name) {
        getMethod.query("name", name).addQuery()
    }
    getMethod.sendWith((resData) => {
        // TODO: to use these data
        return resData//list[transClasses.BriefPersonMember]
    })
}
function modifyPersonInfo(userid, modPersonInfo) {
    // modPersonInfo是transClasses.ModPersonInfo类
    new Put()
        .url("user", String(userid))
        .url("info")
        .bodyObject(modPersonInfo)
        .send()
}
export {getPersonInfo, getAllPersonInfo, modifyPersonInfo}