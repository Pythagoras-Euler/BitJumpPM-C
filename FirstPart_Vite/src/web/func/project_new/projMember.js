import { Delete, Post, Put } from "@/web/transport";

function addMember(proid, userId) {
    return new Post()
        .url("project", String(proid))
        .url("user")
        .bodyObject({userId: userId})
        .send()
}
function deleteMember(proid, userId) {
    return new Delete()
        .url("project", String(proid))
        .url("user?userId=" + String(userId))//为啥这不用body啊...
        .send()
}
function modifyManager(proid, userId, name, isUp) {
    return new Put()
        .url("project", String(proid))
        .url("manager")
        .bodyObject({
            userId: userId,
            name: name,
            isUp: isUp
        })
        .send()
}
function removeMember(proid, userId, name) {
    return new Post()
        .url("project", String(proid))
        .url("change")
        .bodyObject({
            userId: userId,
            name: name
        })
        .send()
}
export {addMember, deleteMember, modifyManager, removeMember}