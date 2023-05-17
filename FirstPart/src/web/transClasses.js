
class User {
    constructor(address, age, birthDate,
        bloodType, censusRegister, createdProId,
        department,education, email, entryTime,
        gender, jobTitle, joinedProId, limitation,
        major, managedProId, marriage, name,
        nationality, phoneNumber, photoUrl,
        politicalStatus, post, previousCompany,
        priv, projectTeam, qqNumber, school,
        seniority, userId, wechatNumber) {
        this.address = address
        this.age = age
        this.birthDate = birthDate
        this.bloodType = bloodType
        this.censusRegister = censusRegister
        this.createdProId = createdProId // list[number]
        this.department = department //enum
        this.education = education //enum
        this.email = email
        this.entryTime = entryTime
        this.gender = gender //enum
        this.jobTitle = jobTitle
        this.joinedProId = joinedProId //list[number]
        this.limitation = limitation
        this.major = major
        this.managedProId = managedProId //list[number]
        this.marriage = marriage
        this.name = name
        this.nationality = nationality
        this.phoneNumber = phoneNumber
        this.photoUrl = photoUrl
        this.politicalStatus = politicalStatus
        this.post = post //enum
        this.previousCompany = previousCompany
        this.priv = priv
        this.projectTeam = projectTeam //enum
        this.qqNumber = qqNumber
        this.school = school
        this.seniority = seniority
        this.userId = userId
        this.wechatNumber = wechatNumber
    }
}

class TableItem {
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
    constructor(name, photoUrl, userId) {
        this.name = name
        this.photoUrl = photoUrl
        this.userId = userId
    }
}

class Project {
    constructor(budget, department, introduction,
        leaderName, members, process, projectId,
        projectName, projectUrl, table) {
        this.budget = budget
        this.department = department
        this.introduction = introduction
        this.leaderName = leaderName
        this.members = members
        this.process = process
        this.projectId = projectId
        this.projectName = projectName
        this.projectUrl = projectUrl
        this.table = table
    }
}

class BaseResponse {
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
class BriefProject {
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
export {
    ModProjIntro, AddProjItem, BriefProject
}