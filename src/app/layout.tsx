'use client';
import { ProgressBar } from '@/components/progress-bar';
import { NAVIGATION } from '@/components/SideBar/constants';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import theme from '@/style/theme';
import { Box } from '@mui/material';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { NextAppProvider } from '@toolpad/core/nextjs';
import '../style/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ReactQueryClientProvider>
                    <NextAppProvider navigation={NAVIGATION} theme={theme}>
                        <DashboardLayout>
                            <Box
                                width={'100%'}
                                bgcolor={(theme) =>
                                    theme.palette.background.default
                                }
                            >
                                {children}
                            </Box>
                        </DashboardLayout>
                        <ProgressBar />
                    </NextAppProvider>
                </ReactQueryClientProvider>
            </body>
        </html>
    );
}
