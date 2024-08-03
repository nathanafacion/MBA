import {HttpResponse, http} from "msw";

import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrderAmountMock = http.get<
    never,
    never,
    GetMonthOrdersAmountResponse
>("metrics/month-orders-amount", () => {
    return HttpResponse.json({amount:4, diffFromLastMonth:-1})
})
