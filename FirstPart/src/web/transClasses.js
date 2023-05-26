
class User {
    // Using
    constructor(userId, name, gender, phoneNumber, entryTime,
        department, projectTeam, priv, education, censusRegister,
        nationality, marriage, birthDate, age, bloodType,
        politicalStatus, qqNumber, wechatNumber, email, post,
        address, school, major, previousCompany, jobTitle,
        limitation, photoUrl, seniority, createdProId, managedProId,
        joinedProId) {
            this.userId = userId
            this.name = name
            this.gender = gender //enum
            this.phoneNumber = phoneNumber
            this.entryTime = entryTime
            this.department = department //enum
            this.projectTeam = projectTeam //enum
            this.priv = priv
            this.education = education //enum
            this.censusRegister = censusRegister
            this.nationality = nationality
            this.marriage = marriage
            this.birthDate = birthDate
            this.age = age
            this.bloodType = bloodType
            this.politicalStatus = politicalStatus
            this.qqNumber = qqNumber
            this.wechatNumber = wechatNumber
            this.email = email
            this.post = post //enum
            this.address = address
            this.school = school
            this.major = major
            this.previousCompany = previousCompany
            this.jobTitle = jobTitle
            this.limitation = limitation
            this.photoUrl = photoUrl
            this.seniority = seniority
            this.createdProId = createdProId // list[number]
            this.managedProId = managedProId //list[number]
            this.joinedProId = joinedProId //list[number]
    }
}

class TableItem {
    // Using
    constructor(beginTime, description, endTime,
        finishTime, isFinish, ownerId, ownerName,
        tableItemId) {
        this.beginTime = beginTime
        this.description = description
        this.endTime = endTime
        this.finishTime = finishTime
        this.isFinish = isFinish
        this.ownerId = ownerId
        this.ownerName = ownerName
        this.tableItemId = tableItemId
    }
}

class Member {
    // Using
    constructor(userId, name, photoUrl, post, process) {
        this.userId = userId
        this.name = name
        this.photoUrl = photoUrl
        this.post = post
        this.process = process
    }
}

class Project {
    // Using
    constructor(projectId, projectName, projectUrl,
        process, department, introduction,
        budget, leaderId, leaderName, members, table) {
        this.projectId = projectId
        this.projectName = projectName
        this.projectUrl = projectUrl
        this.process = process
        this.department = department
        this.introduction = introduction
        this.budget = budget
        this.leaderId = leaderId
        this.leaderName = leaderName
        this.members = members//list[Member]
        this.table = table//list[TableItem]
    }
}

class BaseResponse {
    // Using
    constructor(code, message, data) {
        this.code = code
        this.message = message
        this.data = data
    }
}
export {
    User, TableItem, Member, Project, BaseResponse
}

class ModProjIntro {
    // Using
    constructor(projectId, projectName, projectUrl,
        process, department, introduction, budget,
        leaderId, leaderName) {
            this.projectId = projectId
            this.projectName = projectName
            this.projectUrl = projectUrl
            this.process = process
            this.department = department
            this.introduction = introduction
            this.budget = budget
            this.leaderId = leaderId
            this.leaderName = leaderName
        }
}
class AddProjItem {
    // Deprecated
    constructor(tableItemId, beginTime, endTime,
        ownerId, ownerName, description) {
            this.tableItemId = tableItemId
            this.beginTime = beginTime
            this.endTime = endTime
            this.ownerId = ownerId
            this.ownerName = ownerName
            this.description = description
        }
}
class AddTableItem {
    // Using
    constructor(beginTime, endTime,
        ownerId, ownerName, description) {
            this.beginTime = beginTime
            this.endTime = endTime
            this.ownerId = ownerId
            this.ownerName = ownerName
            this.description = description
        }
}
class ModifyTableItem {
    // Using
    constructor(beginTime, description, endTime,
        finishTime, isFinish, ownerId, ownerName) {
        this.beginTime = beginTime
        this.endTime = endTime
        this.ownerId = ownerId
        this.ownerName = ownerName
        this.isFinish = isFinish
        this.finishTime = finishTime
        this.description = description
    }
}
class BriefProject {
    // Using
    constructor(projectId, projectName, projectUrl,
        process, leaderId, leaderName) {
            this.projectId = projectId
            this.projectName = projectName
            this.projectUrl = projectUrl
            this.process = process
            this.leaderId = leaderId
            this.leaderName = leaderName
        }
}
class BriefMember {
    // Using
    constructor(userId, name, post, seniority) {
        this.userId = userId
        this.name = name
        this.post = post
        this.seniority = seniority
    }
}
class BriefPersonInfo {
    // Using
    constructor(userId, name, photoUrl) {
        this.userId = userId
        this.name = name
        this.photoUrl = photoUrl
    }
}
class ModPersonInfo {
    // Using
    constructor(name, gender, phoneNumber, entryTime,
        department, projectTeam, priv, education, censusRegister,
        nationality, marriage, birthDate, age, bloodType,
        politicalStatus, qqNumber, wechatNumber, email, post,
        address, school, major, previousCompany, jobTitle,
        limitation, photoUrl, seniority) {
            this.name = name
            this.gender = gender //enum
            this.phoneNumber = phoneNumber
            this.entryTime = entryTime
            this.department = department //enum
            this.projectTeam = projectTeam //enum
            this.priv = priv
            this.education = education //enum
            this.censusRegister = censusRegister
            this.nationality = nationality
            this.marriage = marriage
            this.birthDate = birthDate
            this.age = age
            this.bloodType = bloodType
            this.politicalStatus = politicalStatus
            this.qqNumber = qqNumber
            this.wechatNumber = wechatNumber
            this.email = email
            this.post = post //enum
            this.address = address
            this.school = school
            this.major = major
            this.previousCompany = previousCompany
            this.jobTitle = jobTitle
            this.limitation = limitation
            this.photoUrl = photoUrl
            this.seniority = seniority
    }
}
export {
    ModProjIntro, AddProjItem, AddTableItem, ModifyTableItem,
    BriefProject, BriefMember, BriefPersonInfo, ModPersonInfo
}