'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
      storageKey="theme"
      themes={['light', 'dark']}
    >
      {children}
    </NextThemesProvider>
  );
}
