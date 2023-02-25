import './globals.css';
import { Inter } from 'next/font/google';
import { cx } from '@/lib/utils';
import Header from '@/components/Header';
export const metadata = {
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
      <body className={cx(inter.className, 'mainAnimation mainContainer')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
