import { useQuery } from '@tanstack/react-query';
import { platformApi } from '../apis';
import { platformKeys } from '../constants';
import { PlatformParams } from '../types';

export default function usePlatform(params: PlatformParams) {
    const { data, ...resResponse } = useQuery({
        queryKey: [...platformKeys.getList, params],
        queryFn: () => platformApi.getList(params),
        placeholderData: (previousData) => previousData,
    });

    const dataPlatform = data?.data ?? [];

    return {
        data: dataPlatform,
        ...resResponse,
    };
}
