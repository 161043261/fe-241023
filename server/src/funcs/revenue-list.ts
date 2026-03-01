import type { Context } from "koa";
import type { IRevenueList, IResData } from "../types/index.js";
import { mockRevenueList } from "../mock/index.js";
import { randNum } from "../utils/index.js";

export function revenueListFn(ctx: Context) {
  const revenueListData = mockRevenueList(randNum(1000, 2000) /** amount */);
  const resData: IRevenueList & IResData = {
    code: 200,
    message: "获取营收排行榜成功",
    data: revenueListData.revenueList,
  };
  resData.data.sort((a, b) => b.revenue! - a.revenue!);
  ctx.body = resData;
}

export default revenueListFn;
