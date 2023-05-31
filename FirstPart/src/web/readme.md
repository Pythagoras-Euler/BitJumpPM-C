# Web Action 网络操作模块

 \- **注意：/func中所有函数在返回非200时会抛出异常**

## 1 transport.js

Get, Post, Put, Delete方法的实现，构造对应类的新实例来实现每次发送。  
共同父类为WebAction，有4个构造请求的方法（url，methond，header，bodyObject）和2个发送方法（send和sendWith）。

### 1.1 url方法（必需）

用于添加请求目标地址，注意应只添加（子）域名后的**路径参数**。  
*e.g.: <http://zzz.xxx.yy/path1/path2> 只添加"path1"和"path2"*

允许多个参数，或是多次调用（与顺序有关）；  
参数字符串内不要添加'/'。

### 1.2 method方法（在子类中无效）

应使用对应子类直接构造类，method方法不应使用。

### 1.3 header方法（必需但一般自动使用，此时不应使用）

header方法会直接将参数作为header的结构体。  
不建议多次使用，只有最后一次调用会生效。
在构造请求时，若auth内已储存token，会自动添加token为header参数。

**注意！一般不应使用该方法，除非情况是未登录的无token状态。**

不需要考虑'Content-Type': 'application/json'，此项会在bodyObject提供非空参数时在发送时自动补充填充。

### 1.4 bodyObject方法（必需但对Get方法无效，此时不应使用）

bodyObject方法会直接将参数作为body的json结构体。  
不建议多次使用，只有最后一次调用会生效。
方法允许null参数，但不默认null参数。

### 1.5 send方法

方法会发送请求，并（在返回200时）返回返回的data。  
方法会在上述方法填写不完整时抛出异常；会在返回非200时抛出异常。

### 1.6 sendWith方法（已废弃）

此方法已废弃Deprecated  
所有请求直接用send返回data后再处理。

方法会调用send方法，但可以传入结果处理函数（必需）和额外参数（可选）。  
额外参数以数组方式传入结果处理函数。  
方法返回结果处理函数的返回值。

结果处理函数应有1个（返回data）或2个（返回data，额外参数列表）参数，在/func中提供的方法内是以lambda匿名函数表示。

 \- **注意：**WebAction没有导出，应使用导出的4种子类构造请求。  
子类的method方法不应被使用，Get的bodyObject不应被使用；  
对于Get的Query参数，建议用query（添加参数对，可以多次调用）和addQuery（保存全部未保存参数对到目标地址，可以多次调用但建议只最后调用，**必须在url方法调用完后调用**）方法构造；

## 2 transClasses.js

在/func函数中使用的各种数据结构，包括Apifox内列出的4种，其余的是在提交请求时需要填写的。  
注意其中包括随着/project已被废弃的类。

使用中的类标注Using，被废弃的类标注Deprecated

注意类内参数的类型，有部分比较特殊的参数类型我已经注释了，但若不理解最好是和apifox上的内容对照  
没有类型检查很难受...

数组类型（包括各js文件中和该文档中）都是用list\[\]表示的，这可能是错误的或有误导性的，但暂时不打算改正  
实际上就是数组类型

注意：**Member类被Project.members使用，但其中的photoUrl按照api修改文档被修改为photo，虽然apifox中并未修改**

## 3 rsa.js

RSA公钥加密的实现。

## 4 objTrans.js（已废弃）

此文件已废弃Deprecated  
被transClasses.js替代。

## 5 /func目录

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

### 5.1 /project目录（因更新已废弃）

 \- **apifox-项目管理**

此目录已废弃Deprecated
被/project_new替代。

注意：**应考虑是否将project_new目录变更为project以保持简洁，目前的格式出于维护向低兼容的需要**

### 5.2 /project_new目录

 \- **apifox-项目管理**

注意：**应考虑是否将project_new目录变更为project以保持简洁，目前的格式出于维护向低兼容的需要**

#### 5.2.1 projContent.js

 \- **apifox-项目管理-项目内容**

函数：rejectItem（表项\驳回项目表项）， *modifyItem（表项\修改项目表项）*， *addItem（表项\添加项目表项）* ，submitItem（表项\提交项目表项）， *modifyProjIntroduction（修改项目介绍）*

modifyItem的参数modTableItem为 ModifyTableItem类，addItem的参数addTableItem为 AddTableItem类，modifyProjIntroduction的参数modProjIntro为 ModProjIntro类

#### 5.2.2 projManage.js

 \- **apifox-项目管理-项目管理页面&其他分散接口**

函数： **getProjList（项目管理界面\获取项目列表）** ，createNewProject（项目管理界面\创建新的项目），applyCreatePerm（项目管理界面\申请创建权限），deleteProject（项目管理界面\删除特定项目），  
 **getProjInfo（获取特定的项目信息）** ，~~**getProjMember（获取项目成员）**~~

getProjList返回值为 BriefProject类，getProjInfo返回值为 Project类， ~~getProjMemer返回值为 BriefMember类~~
获取项目成员接口已经被删除

#### 5.2.3 projMember.js

 \- **apifox-项目管理-人员增删**

函数：addMember（添加新成员），deleteMember（删除成员），modifyManager（修改管理员），removeMember（调离岗位）

### 5.3 目录下分散文件

#### 5.3.1 accountAction.js

 \- **apifox-注册登录**

函数：signup（用户注册）,  **login（用户登录）** , logout（用户退出登录）, newPassword（修改密码）

注意用户登录的返回值是token，但apifox中的表述不太明确，理论上data总是一个Object，但示例中此项的data是string的token。

#### 5.3.2 personInfo.js

 \- **apifox-人员信息管理**

函数：**getPersonInfo（获取特定人员信息）** ， **getAllPersonInfo（获取所有人员信息）** ， *modifyPersonInfo（修改特定人的信息）*

getPersonInfo返回值为User类，getAllPersonInfo返回值为list\[BriefPersonInfo类\]

modifyPersonInfo的参数modPersonInfo为 ModPersonInfo类

#### 5.3.3 schedule.js

 \- **apifox-首页-日程表**

函数：**getSchedule（日程表和问候语）**

getSchedule返回值为\{schedule: list[\{names: list\[string\], endTime: string\}]\}
