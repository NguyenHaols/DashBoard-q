import { fetchInfoOrderMoney } from '@/modules/Dashboard/apis'
import { useQuery } from '@tanstack/react-query'

export const useFetchInforOrderMoney = () => {
  const { data, ...restReponse } = useQuery({
    queryKey: ['InforOrderMoney'],
    queryFn: fetchInfoOrderMoney
  })

  const defaultData = {
    fundsPresent: 0,
    fundsProgress: 0,
    totalMoney: 0,
    totalOrderFinish: 0
  }

  const dataInforOrderMoney = data ?? defaultData

  return {
    data: dataInforOrderMoney,
    ...restReponse
  }
}
