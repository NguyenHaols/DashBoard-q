'use client'
// import type { Metadata } from 'next'
import '../style/globals.css'
import theme from '@/style/theme'
import { Box } from '@mui/material'
import ReactQueryClientProvider from '@/providers/QueryClientProvider'
import { DashboardLayout } from '@toolpad/core/DashboardLayout'
import { NAVIGATION } from '@/components/SideBar/constants'
import { NextAppProvider } from '@toolpad/core/nextjs'
import { ProgressBar } from '@/components/progress-bar'
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin']
// })

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin']
// })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // const [open, setOpen] = useState<boolean>(true)
  return (
    <html lang='en'>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <NextAppProvider navigation={NAVIGATION} theme={theme}>
            <DashboardLayout>
              <Box
                width={'100%'}
                bgcolor={(theme) => theme.palette.background.default}
              >
                {children}
              </Box>
            </DashboardLayout>
            <ProgressBar />
            {/* <Box display='flex'>
              <Box position='relative'>
                {open && <SideBar open={open} />}
                <Box
                  position='absolute'
                  top={40}
                  right={-30}
                  bgcolor='white'
                  p='.2rem'
                  onClick={() => setOpen(!open)}
                >
                  <FormatListBulletedIcon />
                </Box>
              </Box>
            </Box> */}
          </NextAppProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
