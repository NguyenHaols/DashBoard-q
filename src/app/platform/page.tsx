'use client';
import TitlePage from '@/components/TitlePage';
import { useFilter } from '@/hooks/useFilter';
import AppSearch from '@/modules/Dashboard/components/AppSearch';
import { defaultFilterParam } from '@/modules/Dashboard/constants';
import PlatFormTable from '@/modules/Platform/components/PlatFormTable';
import usePlatform from '@/modules/Platform/hooks/usePlatform';
import { Box, Button } from '@mui/material';

export default function PlatForm() {
    const { dataFilter, onSearch } = useFilter(defaultFilterParam);
    const { data } = usePlatform(dataFilter);
    return (
        <Box p="2.5rem 1.75rem">
            <Box textAlign={'center'}>
                <TitlePage> Platform </TitlePage>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <AppSearch
                    value={dataFilter.keyword || ''}
                    onChange={onSearch}
                />
                <Button variant="contained">Create</Button>
            </Box>
            <Box margin={'2rem 0'}>
                <PlatFormTable data={data} />
            </Box>
        </Box>
    );
}
