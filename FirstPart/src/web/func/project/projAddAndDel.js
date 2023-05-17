import { Delete, Post } from "../../transport";

function createNewProject(projName, projUrl, intro) {
    new Post()
        .url("project", "create")
        .bodyObject({
            projectName: projName,
            projectUrl: projUrl,
            introduction: intro
        })
        .send()
}
function applyCreatePerm(userid, description) {
    new Post()
        .url("project", "apply")
        .bodyObject({
            userId: userid,
            description: description
        })
        .send()
}
function deleteProject(proid) {
    new Delete()
        .url("project", String(proid))
        .bodyObject(null)
        .send()
}
export {createNewProject, applyCreatePerm, deleteProject}