import { HttpResponse, http } from 'msw'

import { GetManagerRestaurantResponse } from '../get-manager-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagerRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza Shop',
    description: 'Custom restaurant description.',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updateAt:null,
  })
})