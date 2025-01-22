'use client';
import ReactQueryClientProvider from '@/providers/QueryClientProvider';
import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700', '900'] });
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` ${poppins.className} antialiased`}>
                <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
            </body>
        </html>
    );
}
