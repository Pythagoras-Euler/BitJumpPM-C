# /func目录（函数文件）

目录下的文件包括与Apifox内接口对应的实现函数，每个函数对应一个接口。

**这些函数并不标记async，内部方法调用也不标注await，如需要请对应修改（并修改此处readme）。**  
注意这些函数会抛出send/ ~~sendWith~~ 的异常。

~~这些函数设计上认为，若需要函数发送请求的返回内容，应通过实现sendWith内的返回处理函数，来进行组件通信/内容保存删改等（或直接处理函数抛出的异常）。  
若需要函数直接返回这些内容后在函数调用处处理，请对应修改（并修改此处readme），请注意变更为send方法并返回方法返回值。~~  
已确认这些函数只会返回请求返回的data或throw error。

 ~~\- *下面内容暂时未完成，只表示了对应api关系*~~

注意：实际上会返回非空值的函数（api）被 **粗体** 标识。  
需要特殊参数类的函数被 *斜体* 标识。  
涉及的类都在transClasses下， **注意** ，考虑到没有类型检查，对类的要求实际上是推荐性的，编辑器不会检查参数类型，但transClasses下的类是按照apifox下的要求设计的。

## 1 /project目录（因更新已废弃）

 \- **apifox-项目管理**

此目录已废弃Deprecated
被/project_new替代。

注意：**应考虑是否将project_new目录变更为project以保持简洁，目前的格式出于维护向低兼容的需要**

## 2 /project_new目录

 \- **apifox-项目管理**

注意：**应考虑是否将project_new目录变更为project以保持简洁，目前的格式出于维护向低兼容的需要**

### 2.1 projContent.js

 \- **apifox-项目管理-项目内容**

函数：rejectItem（表项\驳回项目表项）， *modifyItem（表项\修改项目表项）*， *addItem（表项\添加项目表项）* ，submitItem（表项\提交项目表项）， *modifyProjIntroduction（修改项目介绍）*

modifyItem的参数modTableItem为 ModifyTableItem类，addItem的参数addTableItem为 AddTableItem类，modifyProjIntroduction的参数modProjIntro为 ModProjIntro类

### 2.2 projManage.js

 \- **apifox-项目管理-项目管理页面&其他分散接口**

函数： **getProjList（项目管理界面\获取项目列表）** ，createNewProject（项目管理界面\创建新的项目），applyCreatePerm（项目管理界面\申请创建权限），deleteProject（项目管理界面\删除特定项目），  
 **getProjInfo（获取特定的项目信息）** ，~~**getProjMember（获取项目成员）**~~

getProjList返回值为 BriefProject类，getProjInfo返回值为 Project类， ~~getProjMemer返回值为 BriefMember类~~
获取项目成员接口已经被删除

### 2.3 projMember.js

 \- **apifox-项目管理-人员增删**

函数：addMember（添加新成员），deleteMember（删除成员），modifyManager（修改管理员），removeMember（调离岗位）

## 3 目录下分散文件

### 3.1 accountAction.js

 \- **apifox-注册登录**

函数：signup（用户注册）,  **login（用户登录）** , logout（用户退出登录）, newPassword（修改密码）

注意用户登录的返回值是token，但apifox中的表述不太明确，理论上data总是一个Object，但示例中此项的data是string的token。

### 3.2 personInfo.js

 \- **apifox-人员信息管理**

函数：**getPersonInfo（获取特定人员信息）** ， **getAllPersonInfo（获取所有人员信息）** ， *modifyPersonInfo（修改特定人的信息）*

getPersonInfo返回值为User类，getAllPersonInfo返回值为list\[BriefPersonInfo类\]

modifyPersonInfo的参数modPersonInfo为 ModPersonInfo类

### 3.3 schedule.js

 \- **apifox-首页-日程表**

函数：**getSchedule（日程表和问候语）**

getSchedule返回值为\{schedule: list[\{names: list\[string\], endTime: string\}]\}
