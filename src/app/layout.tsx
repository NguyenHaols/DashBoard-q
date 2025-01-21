'use client';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import '../style/globals.css';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
            </body>
        </html>
    );
}
