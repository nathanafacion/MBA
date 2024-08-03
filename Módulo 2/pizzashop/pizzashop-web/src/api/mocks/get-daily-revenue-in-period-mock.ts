import {HttpResponse, http} from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
    never,
    never,
    GetDailyRevenueInPeriodResponse
>("metrics/daily-receipt-in-period", () => {
    return HttpResponse.json([
      { date:"01/09/2024" , receipt: 2000 },
      { date:"02/09/2024" , receipt: 1000 },
      { date:"03/09/2024" , receipt: 100 },
    ])
})
