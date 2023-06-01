import { Delete, Post, Put } from "../../transport";

function modifyProjIntro(proid, modProjIntro) {
    // modProjIntro 应为transClasses.ModProjIntro类
    new Put()
        .url("project", String(proid))
        .bodyObject(modProjIntro)
        .send()
}
function rejectAndReturn(proid, itemid, reason) {
    new Delete()
        .url("project", String(proid))
        .url("tableitem", String(itemid))
        .bodyObject({
            reason: reason
        })
        .send()
}
function modifyProjItem(proid, tableItem) {
    // tableItem 应为transClasses.TableItem
    new Put()
        .url("project", String(proid))
        .url("tableitem", String(tableItem.tableItemId))
        .bodyObject(tableItem)
        .send()
}
function addProjItem(proid, aProjItem) {
    // aProjItem 应为transClasses.AddProjItem
    new Post()
        .url("project", String(proid), "tableitem")
        .bodyObject(aProjItem)
        .send()
}
export {modifyProjIntro, rejectAndReturn, modifyProjItem, addProjItem}