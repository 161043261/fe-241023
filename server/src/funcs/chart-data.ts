import type { IChartData, IChartData2, IChartData3, IResData } from "../types/index.js";
import { randNum, randArr } from "../utils/index.js";
import type { Context } from "koa";

function chartDataFn(ctx: Context) {
  const resData: IChartData & IResData = {
    code: 200,
    message: "获取营收比例成功",
    data: [
      { name: "A", value: randNum(1, 100) },
      { name: "B", value: randNum(1, 100) },
      { name: "C", value: randNum(1, 100) },
    ],
  };
  ctx.body = resData;
}

function chartDataFn2(ctx: Context) {
  const resData: IChartData2 & IResData = {
    code: 200,
    message: "获取充电信息成功",
    data: [
      { name: "充电功率", data: randArr(1, 100, 9) },
      { name: "充电时长", data: randArr(1, 100, 9) },
      { name: "充电量", data: randArr(1, 100, 9) },
    ],
  };
  ctx.body = resData;
}

function chartDataFn3(ctx: Context) {
  const resData: IChartData3 & IResData = {
    code: 200,
    message: "获取五边形数据成功",
    data: [randNum(1, 100), randNum(1, 100), randNum(1, 100), randNum(1, 100), randNum(1, 100)],
  };
  ctx.body = resData;
}

export { chartDataFn, chartDataFn2, chartDataFn3 };
