import { approveOrderMock } from "./approver-order-mock";
import { cancelOrderMock } from "./cancel-order-mock";
import { deliverOrderMock } from "./deliver-order-mock";
import { dispatchOrderMock } from "./dispatch-order-mock";
import { env } from "../../lib/env";
import {getDailyRevenueInPeriodMock} from "./get-daily-revenue-in-period-mock"
import { getDayOrderAmountMock } from './get-day-orders-amount'
import {getManagedRestaurantMock} from "../../api/mocks/get-managed-restaurant-mock"
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrderAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import {getOrderDetailsMock} from "./get-order-details-mock"
import {getOrdersMock} from "./get-orders-mock"
import { getPopularMock } from "./get-popular-products-mock"
import {getProfileMock} from "./get-profile-mock"
import {registerRestaurantMock} from "../../api/mocks/register-restaurant-mock"
import {setupWorker} from "msw/browser";
import {signInMock} from "../../api/mocks/sign-in-mock";
import {updateProfileMock} from "./update-profile-mock";

export const worker = setupWorker(
    signInMock, 
    registerRestaurantMock,
    getMonthRevenueMock,
    getMonthOrderAmountMock, 
    getDayOrderAmountMock,
    getMonthCanceledOrdersAmountMock,
    getPopularMock,
    getDailyRevenueInPeriodMock,
    getProfileMock,
    getManagedRestaurantMock,
    updateProfileMock,
    getOrderDetailsMock,
    getOrdersMock,
    approveOrderMock,
    cancelOrderMock,
    deliverOrderMock,
    dispatchOrderMock

    
);

export async function enableMSW() {

    if(env.MODE !== "test"){
        return;
    }

    await worker.start();
}