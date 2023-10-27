'use client';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/redux/provider';
import './globals.css';
import ThemeRegistry from '@/styles/ThemeRegistry.';
import SideMenu from '@/components/SideMenu';
import LoginPage from '@/medicalSections/login';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeRegistry options={{ key: 'mui' }}>
            {!isLogin ? (
              <LoginPage setIsLogin={setIsLogin} />
            ) : (
              <SideMenu>{children}</SideMenu>
            )}
          </ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
