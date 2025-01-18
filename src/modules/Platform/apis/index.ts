import axiosClient from '@/apiClient/axiosClient';
import { ListResponse } from '@/types';
import { PlatformData, PlatformParams } from '../types';

export const platformApi = {
    getList: (params: PlatformParams): Promise<ListResponse<PlatformData>> => {
        return axiosClient.get('platform/list', {
            params,
        });
    },
};
