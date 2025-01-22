'use client';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import { Poppins } from 'next/font/google';
import { Suspense } from 'react';
import '../style/globals.css';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${poppins.className} antialiased`}>
                <Suspense fallback={null}>
                    <ReactQueryClientProvider>
                        {children}
                    </ReactQueryClientProvider>
                </Suspense>
            </body>
        </html>
    );
}
