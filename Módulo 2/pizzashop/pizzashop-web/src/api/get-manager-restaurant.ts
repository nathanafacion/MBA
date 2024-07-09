import {api} from "../lib/axios"

export interface GetManagerRestaurantResponse {
    id: string;
    name: string;
    description: string | null;
    managerId: string | null;
    createdAt: Date | null;
    updateAt: Date | null;
}

export const getManagerRestaurant = async() => {
    const response = await api.get<GetManagerRestaurantResponse>("/managed-restaurant");

    return response.data;
}