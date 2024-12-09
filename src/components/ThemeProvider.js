'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children }) {
  // Changed to default export
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem // Omitted value as per ESLint
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
