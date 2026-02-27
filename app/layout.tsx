import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { ImagePreloader } from '@/components/image-preloader'
import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700']
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Interior Design Portfolio',
  description: 'Explore sophisticated interior design projects showcasing contemporary spaces with refined aesthetics and thoughtful details.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F0E6' },
    { media: '(prefers-color-scheme: dark)', color: '#1A1815' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload showcase images for faster initial load */}
        <link rel="preload" as="image" href="/COVERS/2.jpg" />
        <link rel="preload" as="image" href="/COVERS/4.jpg" />
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ImagePreloader />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
