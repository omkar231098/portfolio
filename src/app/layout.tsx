import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omkardhanave.vercel.app'),
  title: 'Omkar Dhanave — Full Stack Web Developer',
  description: 'Portfolio of Omkar Dhanave, a Full Stack Web Developer passionate about building modern web applications, scalable APIs, and intuitive digital experiences.',
  keywords: [
    'Omkar Dhanave',
    'Full Stack Developer',
    'Web Developer',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Portfolio',
    'Satara',
    'India',
  ],
  authors: [{ name: 'Omkar Dhanave' }],
  creator: 'Omkar Dhanave',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omkardhanave.vercel.app',
    title: 'Omkar Dhanave — Full Stack Web Developer',
    description: 'Building digital experiences that actually matter. Full Stack Web Developer specializing in JavaScript, Node.js, and React.',
    siteName: 'Omkar Dhanave Portfolio',
    images: [
      {
        url: '/images/profile.png',
        width: 640,
        height: 640,
        alt: 'Omkar Dhanave — Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Dhanave — Full Stack Web Developer',
    description: 'Building digital experiences that actually matter. Full Stack Web Developer specializing in JavaScript, Node.js, and React.',
    images: ['/images/profile.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('portfolio-theme-v3');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-purple-500/30 selection:text-inherit`}>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
