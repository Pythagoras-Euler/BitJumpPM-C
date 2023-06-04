// import axios, { Axios } from "axios";
// import auth from "../store/modules/auth";
import store from "../store";

class WebAction {
  static baseUrl = "http://127.0.0.1:4523/m1/2693357-0-default";
  static defaultErrMsg = "抱歉，操作失败，请重试";
  init() {
    this._generalUrl = WebAction.baseUrl;
    this._method = null;
    this._headers = null;
    this._body = null;
    this.setUrl = false;
    this.setMethod = false;
    this.setHeaders = false;
    this.setBody = false;
  }
  // constructor(url, method, headers, rawBody) {
  //     this.init()
  //     this._generalUrl += url
  //     this._method = method
  //     this._headers = headers
  //     this._body = JSON.stringify(rawBody)
  // }
  constructor() {
    this.init();
    // console.log(store.getters.token);
    if (store.getters.token) {
      this.headers({
        token: store.getters.token,
      });
    }
  }

  // url(url) {
  //     this._generalUrl = Action.baseUrl + url
  //     this.setUrl = true
  // }
  // 可以重复地调用url()来添加路径，或一次性添加
  // 注意：get-query已经在Get类中实现
  url(...paths) {
    paths.map((path) => {
      this._generalUrl += "/" + String(path);
    });
    this.setUrl = true;
    return this;
  }

  method(method) {
    this._method = method;
    this.setMethod = true;
    return this;
  }

  headers(headers) {
    this._headers = headers;
    this.setHeaders = true;
    return this;
  }

  bodyObject(rawBody) {
    if (rawBody) {
      this._body = JSON.stringify(rawBody);
    } else {
      this._body = null;
    }
    this.setBody = true;
    return this;
  }

  isReady() {
    return this.setUrl && this.setMethod && this.setHeaders && this.setBody;
  }
  async send() {
    if (!this.isReady()) {
      const error = new Error(
        "incompleted arguments! check your actions before."
      );
      throw error;
    }
    let fetchArgs = {
      method: this._method,
    };
    if (this._headers) {
      fetchArgs.headers = this._headers;
    }
    if (this._body) {
      fetchArgs.body = this._body;
      if (!fetchArgs.headers) {
        fetchArgs.headers = {};
      }
      fetchArgs.headers["'Content-Type'"] = "application/json";
    }
    const response = await fetch(this._generalUrl, fetchArgs);
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || WebAction.defaultErrMsg);
      throw error;
    }
    return responseData.data;
    // fetch(this._generalUrl, fetchArgs)
    //     .then(response => {
    //         const responseData = response.json()
    //         if (!response.ok) {
    //             const error = new Error(
    //                 responseData.message || Action.defaultErrMsg
    //             )
    //             throw error
    //         }
    //         return responseData
    //     })
    //     .then(responseData => {
    //         if (optional) {
    //             doWithResp(responseData, optional)
    //         }
    //         else {
    //             doWithResp(responseData)
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
  }
  async sendWith(doWithResp, ...optional) {
    // Deprecated
    const responseData = await this.send();
    let retVal;
    if (optional) {
      retVal = doWithResp(responseData, optional);
    } else {
      retVal = doWithResp(responseData);
    }
    return retVal;
  }
}

class Get extends WebAction {
  constructor() {
    super();
    super.method("GET");
    super.bodyObject(null);
    this.queryUrl = "";
    this.queryAdded = false;
  }
  method(method) {
    method = "GET";
    super.method(method);
  }
  bodyObject(rawBody) {
    rawBody = null;
    super.bodyObject(rawBody);
  }
  // 注意：get-query已实现如下
  // addQuery是保存操作，但不检查url是否已填写完成
  // 虽然实现上可以在addQurey后再添加再保存，但...
  query(name, value) {
    queryPairStr = String(name) + "=" + String(value);
    if (this.queryUrl || this.queryAdded) {
      this.queryUrl += "&";
    } else {
      this.queryUrl = "?";
    }
    this.queryUrl += queryPairStr;
    return this;
  }
  addQuery() {
    super.url(this.queryUrl);
    this.queryUrl = "";
    this.queryAdded = true;
    return this;
  }
}
class Post extends WebAction {
  constructor() {
    super();
    super.method("POST");
  }
  method(method) {
    method = "POST";
    super.method(method);
  }
}
class Put extends WebAction {
  constructor() {
    super();
    super.method("PUT");
  }
  method(method) {
    method = "PUT";
    super.method(method);
  }
}
class Delete extends WebAction {
  constructor() {
    super();
    super.method("DELETE");
  }
  method(method) {
    method = "DELETE";
    super.method(method);
  }
}

export { Get, Post, Put, Delete };

// 以下已废弃

// class _Action {
//     static baseUrl = 'localhost'
//     static defaultErrMsg = '抱歉，操作失败，请重试'
//     constructor(generalUrl, method, headers, rawBody) {
//         this.generalUrl = generalUrl
//         this.method = method
//         this.headers = headers
//         this.body = JSON.stringify(rawBody)
//     }
//     isReady() {
//         return this.generalUrl && this.method && this.headers && this.body
//     }
//     async sendWith(doWithResp, ...optional) {
//         if (!this.isReady()) {
//             const error = new Error(
//                 'incompleted arguments! check your action before.'
//             )
//             throw error
//         }
//         const response = await fetch(this.generalUrl, {
//             method: this.method,
//             headers: this.headers,
//             body: this.body
//         })
//         const responseData = await response.json()
//         if (!response.ok) {
//             const error = new Error(
//                 responseData.message || this.defaultErrMsg
//             )
//             throw error
//         }
//         else {
//             doWithResp(responseData, optional)
//         }
//     }
// }
// class _Get extends _Action {
//     constructor(url, headers) {
//         super(url, 'GET', headers, null)
//     }
// }
// class _Post extends _Action {
//     constructor(url, headers, rawBody) {
//         super(url, 'POST', headers, rawBody)
//     }
// }
// class _Put extends _Action {
//     constructor(url, headers, rawBody) {
//         super(url, 'PUT', headers, rawBody)
//     }
// }
// class _Delete extends _Action {
//     constructor(url, headers, rawBody) {
//         super(url, 'DELETE', headers, rawBody)
//     }
// }

// const _UploadMethod = PropTypes.oneOfType(['get', 'post', 'put', 'del']);
// export function uploadData(_method, upurl, obj) {
//     let _headers;
//     let config = {
//         method: _method,
//         url: upurl
//     };

//     if (obj) {
//         _headers["'Content-Type'"] = 'application/json;charset=utf-8';
//         config.data = new Blob([JSON.stringify(obj)], {type: "application/json;charset=utf-8"});
//     }

//     let _token = auth.state().token;
//     if (_token) {
//         _headers["'token'"] = _token;
//     }
//     config.headers = _headers;

//     axios(config)
//         .then((response) => {
//             receiveData(response);
//         })
//         .catch()
// }
// uploadData.protoTypes = {
//     _method: _UploadMethod,
//     obj: PropTypes.object,
//     upurl: PropTypes.string,
// }

// function receiveData(resp) {
//     let data = resp.data
//     if (resp.status == 200) {
//         //
//     }
//     else {
//         //
//     }
// }
// receiveData.protoTypes = {
//     resp: Axios.AxiosResponse
// }
