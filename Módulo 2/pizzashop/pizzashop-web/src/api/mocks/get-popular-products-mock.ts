import {HttpResponse, http} from "msw";

import { GetPopularProductsResponse } from "../get-popular-product";

export const getPopularMock = http.get<
    never,
    never,
    GetPopularProductsResponse
>("metrics/popular-products", () => {
    return HttpResponse.json([
        { product:"Pizza1", amount:9 },
        { product:"Pizza2", amount:3 },
        { product:"Pizza3", amount:1 },
        { product:"Pizza4", amount:11 },
        { product:"Pizza5", amount:8 },


    ])
})
