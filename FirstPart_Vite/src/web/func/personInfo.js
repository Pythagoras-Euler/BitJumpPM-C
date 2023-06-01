import { Get, Put } from "../transport";

function getPersonInfo(userid) {
    return new Get()
        .url("user", String(userid))
        .url("info")
        // .sendWith((resData) => {
        //     // TODO: to use these data
        //     return resData//transClasses.User
        // })
        .send()//transClasses.User
}
function getAllPersonInfo(name=null) {
    let getMethod = new Get()
    getMethod.url("user", "list")
    if (name) {
        getMethod.query("name", name).addQuery()
    }
    // getMethod.sendWith((resData) => {
    //     // TODO: to use these data
    //     return resData//list[transClasses.BriefPersonInfo]
    // })
    return getMethod.send()//list[transClasses.BriefPersonInfo]
}
function modifyPersonInfo(userid, modPersonInfo) {
    // modPersonInfo是transClasses.ModPersonInfo类
    return new Put()
        .url("user", String(userid))
        .url("info")
        .bodyObject(modPersonInfo)
        .send()
}
export {getPersonInfo, getAllPersonInfo, modifyPersonInfo}