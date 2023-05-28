import { Post, Put } from "@/web/transport";

function rejectItem(proid, itemid, reason) {
    new Post()
        .url("project", String(proid))
        .url("tableitem", String(itemid))
        .url("delete")
        .bodyObject({reason: reason})
        .send()
}
function modifyItem(proid, itemid, modTableItem) {
    // modTableItem为transClasses.ModifyTableItem类
    new Put()
        .url("project", String(proid))
        .url("tableitem", String(itemid))
        .bodyObject(modTableItem)
        .send()
}
function addItem(proid, addTableItem) {
    // addTableItem为transClasses.AddTableItem类
    new Post()
        .url("project", String(proid))
        .url("tableitem")
        .bodyObject(addTableItem)
        .send()
}
function submitItem(proid, itemid, submitTime, description) {
    new Post()
        .url("project", String(proid))
        .url("tableitem", String(itemid))
        .bodyObject({
            submitTime: String(submitTime),
            description: description
        })
        .send()
}
function modifyProjIntroduction(proid, modProjIntro) {
    // modProjIntro为transClasses.ModProjIntro类
    new Put()
        .url("project", String(proid))
        .bodyObject(modProjIntro)
        .send()
}
export { rejectItem, modifyItem, addItem, submitItem, modifyProjIntroduction }