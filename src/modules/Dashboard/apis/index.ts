import {
  ListServiceResponse,
  ListServiceStatisticResponse,
  Service,
  ServiceStatistic,
  ServiceStatisticParams
} from '@/modules/Dashboard/types'
import axiosClient from '../../../apiClient/axiosClient'

export const fetchInfoOrderMoney = async () => {
  const res = await axiosClient.get('/order/info-order-money?language=en')
  return res.data
}

export const fetchStatisticalOverview = async () => {
  const res = await axiosClient.get('order/statistical-overview?language=en')
  return res.data
}

export const fetchServiceList = async () => {
  return await axiosClient.get<ListServiceResponse<Service>>(
    'service/list?language=en'
  )
}

export const fetchServiceStatistic = async (
  params: ServiceStatisticParams
): Promise<ListServiceStatisticResponse<ServiceStatistic>> => {
  return await axiosClient.get('service/statistics', { params })
}
