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

### 1.6 sendWith方法

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

## 3 rsa.js

RSA公钥加密的实现。

## 4 objTrans.js（已废弃）

被transClasses.js替代。

## 5 /func目录

目录下的文件包括与Apifox内接口对应的实现函数，每个函数对应一个接口。

这些函数并不标记async，内部方法调用也不标注await，如需要请对应修改（并修改此处readme）。  
注意这些函数会抛出send/sendWith的异常。

这些函数设计上认为，若需要函数发送请求的返回内容，应通过实现sendWith内的返回处理函数，来进行组件通信/内容保存删改等（或直接处理函数抛出的异常）。  
若需要函数直接返回这些内容后在函数调用处处理，请对应修改（并修改此处readme），请注意变更为send方法并返回方法返回值。

 \- *下面内容暂时未完成，只表示了对应api关系*

### 5.1 /project目录（因更新已废弃）

 \- **apifox-项目管理**

### 5.2 /project_new目录

 \- **apifox-项目管理**

#### 5.2.1 projContent.js

 \- **apifox-项目管理-项目内容**

#### 5.2.2 projManage.js

 \- **apifox-项目管理-项目管理页面&其他分散接口**

#### 5.2.3 proj

 \- **apifox-项目管理-人员增删**

### 5.3 目录下分散文件

#### 5.3.1 accountAction.js

 \- **apifox-注册登录**

#### 5.3.2 personInfo.js

 \- **apifox-人员信息管理**

#### 5.3.3 schedule.js

 \- **apifox-首页-日程表**
