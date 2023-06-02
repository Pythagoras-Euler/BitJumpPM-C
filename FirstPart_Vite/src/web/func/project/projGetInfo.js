import { Get } from "../../transport";

function getProjList(type) {
    new Get()
        .url("project", "list", String(type))
        .sendWith((resData) => {
            // 在这里放更新页面/store的操作
            // return只是为了用上resData参数防止报错...不然直接send就行了
            // 列表是transClasses.BriefProject类的实例的列表
            return resData
        })
}
function getProjInfo(proid) {
    new Get()
        .url("project", String(proid))
        .sendWith((resData) => {
            // 在这里放更新页面/store的操作
            // return只是为了用上resData参数防止报错...不然直接send就行了
            // 是transClasses.Project类的实例的列表
            return resData
        })
}
export {getProjInfo, getProjList}