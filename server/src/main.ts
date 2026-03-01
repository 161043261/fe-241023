import Koa, { type Context, type Next } from "koa";
import Router from "@koa/router";
import { bodyParser } from "@koa/bodyparser";
import { Api } from "./constants/index.js";
import {
  chartDataFn,
  chartDataFn2,
  chartDataFn3,
  revenueListFn,
  loginFn,
  robotAddFn,
  robotDeleteFn,
  robotQueryFn,
  markerListFn,
  robotUpdateFn,
  orderQueryFn,
  orderDeleteFn,
} from "./funcs/index.js";
import "dotenv/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { mockOrderList, mockRobotList } from "./mock/index.js";
import { randNum } from "./utils/index.js";
import { writeFileSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = new Koa();
const router = new Router();

async function cors(ctx: Context, next: Next) {
  console.log("[server] req.url:", ctx.url);
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Headers", "*");
  ctx.set("Access-Control-Allow-Credentials", "true");
  ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  ctx.set("Content-Type", "application/json;charset=utf-8");
  // 预检 (pre-flight) 请求
  if (ctx.method.toLowerCase() === "options") {
    ctx.status = 204;
  } else {
    await next();
  }
}

// 路由注册
router.all(Api.Login, loginFn);
router.all(Api.ChartData, chartDataFn);
router.all(Api.ChartData2, chartDataFn2);
router.all(Api.ChartData3, chartDataFn3);
router.all(Api.RevenueList, revenueListFn);
router.all(Api.RobotQuery, robotQueryFn);
router.all(Api.RobotAdd, robotAddFn);
router.all(Api.RobotUpdate, robotUpdateFn);
router.all(Api.RobotDelete, robotDeleteFn);
router.all(Api.MarkerList, markerListFn);
router.all(Api.OrderQuery, orderQueryFn);
router.all(Api.OrderDelete, orderDeleteFn);

app.use(bodyParser({ jsonLimit: "100mb", formLimit: "100mb" }));
app.use(cors);
app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT ?? 3000;

function createJsonFiles() {
  console.log("[createJsonFiles] __dirname:", __dirname);
  const jsonPath = resolve(__dirname, "./assets/robot-list.json");

  const robotList = mockRobotList(randNum(50, 100));
  // 定位到上海市静安区
  robotList[0].lat = 121.391229;
  robotList[0].lng = 31.251326;
  const jsonStr = JSON.stringify(robotList);
  writeFileSync(jsonPath, jsonStr, { encoding: "utf8" });

  const jsonPath2 = resolve(__dirname, "./assets/order-list.json");
  const orderList = mockOrderList(randNum(250, 500), robotList);
  const jsonStr2 = JSON.stringify(orderList);
  writeFileSync(jsonPath2, jsonStr2, { encoding: "utf8" });
}

createJsonFiles();

app.listen(port, () => {
  console.log(`[server] http://localhost:${port}/`);
});
