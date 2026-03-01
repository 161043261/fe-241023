import fs from "node:fs";
import type { IRobotList } from "../types/index.js";
import type { Context } from "koa";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function readRobotList(): IRobotList["data"] {
  const jsonStr = fs.readFileSync(resolve(__dirname, "../assets/robot-list.json"), "utf8");
  return JSON.parse(jsonStr);
}

export function markerListFn(ctx: Context) {
  const resData = readRobotList();
  ctx.body = {
    code: 200,
    message: "获取地图标记列表成功",
    data: { list: resData },
  };
}
