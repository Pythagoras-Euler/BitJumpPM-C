import {
  login,
  signup,
  newPassword,
  logout,
} from "@/web/func/accountAction.js";

export default {
  state() {
    return {
      //当前登录用户id,可以判断当前用户是否登录
      userId: null,
      //如果服务器有针对用户访问权限的限制数据，可通过登录时返回对应的token来进行认证
      token: null,
    };
  },
  getters: {
    //获取用户id
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    //判断是否登录状态
    isLoggedin(state) {
      return !!state.userId;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.userId = payload.userId;
      state.token = payload.token;
    },
  },
  actions: {
    async vxLogout(context) {
      try {
        const response = await logout();
        // alert("退出成功");
        context.commit("setUser", {
          userId: null,
          token: null,
        });
      } catch (error) {
        console.log(error);
        throw error;
      }
      // console.log(context.getters.userId);
    },
    async changePassword(_context, payload) {
      //TODO:修改密码的通信
      try {
        const response = await newPassword(
          payload.oldPassword,
          payload.newPassword
        );
        alert("修改成功");
      } catch (error) {
        console.log(error);
        throw error;
      }

      // console.log(payload);
    },
    async vxSignup(_context, payload) {
      //与前端通信代码对接;
      try {
        const response = await signup(
          payload.id,
          payload.password,
          payload.email
        );
        // 处理返回的响应数据
        //   console.log(response);
      } catch (error) {
        // 捕获并处理错误
        console.error(error);
        // 抛出错误信息，以便前端页面显示
        throw error;
      }

      // //TODO:注册服务通信
      // const url =
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvQfseAowXnTM8ZLKWdE4t9Z2QuWEAKEI";

      // //向服务器发送注册数据
      // const response = await fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     userId: payload.id,
      //     email: payload.email,
      //     password: payload.password,
      //     returnSecureToken: true,
      //   }),
      // });
      // //等待回复数据
      // const responseData = await response.json();

      // //捕获错误并抛出错误信息，以便前端页面做错误显示
      // if (!response.ok) {
      //   const error = new Error(
      //     responseData.message || "抱歉，操作失败，请重试"
      //   );
      //   throw error;
      // }
    },
    async vxLogin(context, payload) {
      // //与前端通信代码对接;
      try {
        const response = await login(payload.id, payload.password);
        // 处理返回的响应数据
        //   console.log(response);
        // 设置用户登录信息;
        console.log(response);
        context.commit("setUser", {
          token: response,
          userId: payload.id,
        });
        console.log(response);
      } catch (error) {
        // 捕获并处理错误
        console.error(error);
        // 抛出错误信息，以便前端页面显示
        throw error;
      }

      //TODO: 假接口对接代码，登录服务通信,由于用的是firebase的验证测试，登录方式是邮箱，所以先暂时硬编码，只是为了测试前端页面显示
      // const url =
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvQfseAowXnTM8ZLKWdE4t9Z2QuWEAKEI";
      // //向服务器发送登录数据
      // const responseData = await fetch(url, {
      //   method: "POST",
      //   body: JSON.stringify({
      //     email: "aaapfcs@gmail.com",
      //     password: payload.password,
      //     returnSecureToken: true,
      //   }),
      // });
      // //等待回复数据;
      // //捕获错误并抛出错误信息，以便前端页面做错误显示
      // if (!responseData.ok) {
      //   const error = new Error(
      //     responseData.message || "抱歉，操作失败，请重试"
      //   );
      //   throw error;
      // } else {
      //   //设置用户登录信息
      //   context.commit("setUser", {
      //     token: responseData.idToken,
      //     userId: payload.id,
      //   });
      // }
    },
  },
};
