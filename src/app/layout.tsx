import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemePropvider';

const nunito = Nunito_Sans({ subsets: ['latin'], weight: ['300', '400', '600', '800'] });

export const metadata: Metadata = {
  title: 'Countries',
  description: 'Countries',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className + ' bg-bodyLight dark:bg-bodyDark bg-trasition'}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
