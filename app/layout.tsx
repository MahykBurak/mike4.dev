import './globals.css';
import { Inter } from 'next/font/google';
import { cx } from '@/lib/utils';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: 'Burak Mike',
  description: 'Burak Mike personal website',
};

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={cx(inter.className, 'mainContainer')}>
        <Header />
        <div className="mainAnimation ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
