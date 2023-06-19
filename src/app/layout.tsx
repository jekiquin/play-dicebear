'use client';
import MainNav from '@/components/common/mainNav';
import './globals.css';
import DicebearProvider from '@/context/dicebearContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <MainNav />
          <DicebearProvider>{children}</DicebearProvider>
        </main>
      </body>
    </html>
  );
}

const styles = {
  main: 'container mx-auto',
};
