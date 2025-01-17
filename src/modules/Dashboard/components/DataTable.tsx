import { LOCALE, STATUS } from '@/enums/common';
import { formatCurrency } from '@/helper';
import { useFilter } from '@/hooks/useFilter';
import { dataFilterParams, ServiceStatistic } from '@/modules/Dashboard/types';
import { Box, Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { useFetchServiceStatistic } from '../hooks/useFetchServiceStatistic';
import AppSearch from './AppSearch';
import DateFilter from './DateFilter';

export default function DataTable() {
    const defaultFilterParam: dataFilterParams = {
        language: LOCALE.EN,
        // offset: OFFSET_DEFAULT,
        // limit: LIMIT_DEFAULT,
    };
    const { dataFilter, onSearch, onChangeFilter } =
        useFilter(defaultFilterParam);
    const { data, isFetching } = useFetchServiceStatistic(dataFilter);

    const columns: GridColDef[] = [
        {
            field: 'ordinalNumber',
            headerName: 'No.',
            sortable: false,
            disableColumnMenu: true,
            flex: 0.5,
        },
        {
            field: 'id',
            headerName: 'ID',
            sortable: false,
            disableColumnMenu: true,
            flex: 0.5,
        },
        {
            field: 'services',
            headerName: 'Services',
            sortable: false,
            disableColumnMenu: true,
            flex: 2,
        },
        {
            field: 'category',
            headerName: 'Category',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'provider',
            headerName: 'Provider',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'undiscountedPrice',
            headerName: 'Undiscounted Price',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'ratePer1000Original',
            headerName: 'Rate Per 1000 Original',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'ratio',
            headerName: 'Ratio',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'level',
            headerName: 'Level',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            sortable: false,
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'usage',
            headerName: 'Usage',
            disableColumnMenu: true,
            flex: 1,
        },
        {
            field: 'revenue',
            headerName: 'Revenue',
            disableColumnMenu: true,
            flex: 1,
        },
    ];

    const rows = useMemo(() => {
        return (
            data?.data?.map((item: ServiceStatistic, index: number) => ({
                ordinalNumber: index + 1,
                id: item.service_id,
                services: item.service_name,
                category: item.categories_name,
                provider: item.provider_name,
                undiscountedPrice: formatCurrency(
                    Number(item.service_initial_rate)
                ),
                ratePer1000Original: formatCurrency(Number(item.service_rate)),
                ratio: item.service_ratio + '%',
                level: item.service_level,
                status:
                    item.service_status === 1
                        ? STATUS.ACTIVE
                        : item.service_status === 2
                          ? STATUS.BLOCKED
                          : STATUS.REMOVED,
                quantity: item.totalQuantity,
                usage: item.totalCountOfServiceUsage,
                revenue: formatCurrency(item.totalMoney),
            })) || []
        );
    }, [data]);

    return (
        <Box>
            <Box margin={'2rem 0'} width={'100%'} display={'flex'} gap={'1rem'}>
                <AppSearch onChange={onSearch} />
                <DateFilter
                    value={
                        (dataFilter.startDate &&
                            dataFilter.endDate &&
                            JSON.stringify([
                                dataFilter.startDate,
                                dataFilter.endDate,
                            ])) ||
                        ''
                    }
                    onChangeFilter={onChangeFilter}
                />
            </Box>
            <Paper sx={{ borderRadius: '.5rem' }}>
                <Box display={'flex'} p={'1.5rem 2rem'} gap={3}>
                    <Typography variant="h6">
                        Revenue:{formatCurrency(data.totalMoneySum)}
                    </Typography>
                    <Typography variant="h6">
                        Cost:{formatCurrency(data.totalInitialMoneySum)}
                    </Typography>
                    <Typography variant="h6">
                        Profit:
                        {formatCurrency(
                            data.totalMoneySum - data.totalInitialMoneySum
                        )}
                    </Typography>
                </Box>
                <DataGrid
                    loading={isFetching}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10, 20]}
                    sx={{ border: 0, borderRadius: '.5rem' }}
                />
            </Paper>
        </Box>
    );
}
