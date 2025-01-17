/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ServiceStatisticParams } from '@/modules/Dashboard/types';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler } from 'react';

export type OnSearchType = ChangeEventHandler<HTMLInputElement>;

export type OnChangeFilter<DataFilterType> = (
    newValue: Partial<DataFilterType>,
    backToFirstPage?: boolean
) => void;

export interface UseFilterProps<DataFilterType> {
    dataFilter: DataFilterType;
    onSearch: any;
    onChangeFilter: OnChangeFilter<DataFilterType>;
}

export const useFilter = <DataFilterType extends ServiceStatisticParams>(
    defaultFilter: DataFilterType
): UseFilterProps<DataFilterType> => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const queryParams = Object.fromEntries(
        searchParams.entries()
    ) as Partial<DataFilterType>;

    const dataFilter: DataFilterType = {
        ...defaultFilter,
        ...queryParams,
    };

    const syncParamsToURL = (params: any) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        for (const [key, value] of Object.entries(params)) {
            if (value) {
                current.set(key, value as string);
            } else {
                current.delete(key);
            }
        }

        router.push(`${pathname}?${current.toString()}`);
    };

    const onSearch: OnSearchType = (e) => {
        const keyword = e.target.value?.trim();
        syncParamsToURL({
            keyword,
        });
    };

    const onChangeFilter: OnChangeFilter<DataFilterType> = (
        newValue,
        backToFirstPage
    ) => {
        const pageParams = backToFirstPage
            ? {
                  offset: defaultFilter.offset,
                  limit: defaultFilter.limit,
              }
            : {};

        syncParamsToURL({
            ...pageParams,
            ...newValue,
        });
    };

    return {
        dataFilter,
        onSearch,
        onChangeFilter,
    };
};
