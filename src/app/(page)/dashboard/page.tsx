'use client';
import TitlePage from '@/components/TitlePage';
import AllOrders from '@/modules/Dashboard/components/AllOrders';
import DataTable from '@/modules/Dashboard/components/DataTable';
import Funds from '@/modules/Dashboard/components/Funds';
import Orders from '@/modules/Dashboard/components/Orders';
import { useFetchInforOrderMoney } from '@/modules/Dashboard/hooks/useFetchInforOrderMoney';
import { Box } from '@mui/material';

export default function Statistic() {
    const {
        data: inforOrderMoneyData,
        // isLoading: isLoadingInforOrderMoney,
        // isError: isErrorInforOrderMoney
    } = useFetchInforOrderMoney();

    return (
        <Box textAlign="center" p="2.5rem 1.75rem">
            <TitlePage>Statistic</TitlePage>
            <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="2rem"
            >
                <Box width="49%">
                    <Orders
                        present={inforOrderMoneyData?.fundsPresent}
                        progress={inforOrderMoneyData?.fundsProgress}
                    />
                </Box>
                <Box width="49%">
                    <Funds
                        totalMoney={inforOrderMoneyData?.totalMoney}
                        totalOrderFinish={inforOrderMoneyData?.totalOrderFinish}
                    />
                </Box>
            </Box>
            <Box>
                <AllOrders />
            </Box>

            <Box marginTop={'2rem'} width={'100%'}>
                <DataTable />
            </Box>
        </Box>
    );
}
