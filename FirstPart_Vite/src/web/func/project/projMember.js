import { Delete, Post, Put } from "../../transport";

function addMember(proid, userId, name, post) {
    new Post()
        .url("project", String(proid), "user")
        .bodyObject({
            userId: userId,
            name: name,
            post: post
        })
        .send()
}
function deleteMember(proid, userId, name) {
    new Delete()
        .url("project", String(proid), "user")
        .bodyObject({
            userId: userId,
            name: name
        })
        .send()
}
function setManager(proid, userId, name, isUp) {
    new Put()
        .url("project", String(proid), "manager")
        .bodyObject({
            userId: userId,
            name: name,
            isUp: isUp
        })
        .send()
}
export {addMember, deleteMember, setManager}