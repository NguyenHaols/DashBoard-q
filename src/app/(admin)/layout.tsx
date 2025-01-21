'use client';

import { NAVIGATION } from '@/components/sideBar/constants';
import theme from '@/style/theme';
import { Box } from '@mui/material';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NextAppProvider } from '@toolpad/core/nextjs';
import { PropsWithChildren } from 'react';
export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <NextAppProvider navigation={NAVIGATION} theme={theme}>
            <DashboardLayout>
                <Box
                    width={'100%'}
                    bgcolor={(theme) => theme.palette.background.default}
                >
                    {children}
                </Box>
            </DashboardLayout>
        </NextAppProvider>
    );
}
