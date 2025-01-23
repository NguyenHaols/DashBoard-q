'use client';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import '../style/globals.css';
const inter = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${inter.className} antialiased`}>
                <Suspense fallback={null}>
                    <ReactQueryClientProvider>
                        {children}
                    </ReactQueryClientProvider>
                </Suspense>
            </body>
        </html>
    );
}
