import { fetchStatisticalOverview } from '@/modules/Dashboard/apis';
import { useQuery } from '@tanstack/react-query';

export const useFetchStatisticalOverview = () => {
    const { data, ...restReponse } = useQuery({
        queryKey: ['StatisticalOverview'],
        queryFn: fetchStatisticalOverview,
    });

    const defaultData = {
        totalOrderCompleted: 0,
        totalOrderInProgress: 0,
        totalOrderPartial: 0,
        totalOrderCanceled: 0,
        totalOrderProcessing: 0,
        totalOrderPending: 0,
    };

    const dataStatisticalOverview = data?.data ?? defaultData;

    return {
        data: dataStatisticalOverview,
        ...restReponse,
    };
};
