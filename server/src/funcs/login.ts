import { adminMenu, userMenu } from "../constants/index.js";
import type { ILoginResData, IResData } from "../types/index.js";
import type { Context } from "koa";

function loginFn(ctx: Context) {
  const { username, password } = ctx.query;
  let resData: ILoginResData & IResData;
  if (username === "admin" && password === "1111") {
    resData = {
      code: 200,
      message: "登录成功",
      data: {
        token: "token",
        auth: "admin",
        menuList: adminMenu,
      },
    };
  } else if (username === "user" && password === "1111") {
    resData = {
      code: 200,
      message: "登录成功",
      data: {
        token: "token",
        auth: "user",
        menuList: userMenu,
      },
    };
  } else {
    resData = {
      code: 400,
      message: "账号或密码错误",
    };
  }
  ctx.body = resData;
}

export default loginFn;
