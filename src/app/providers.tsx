`use client`
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from 'next-themes'

export default function Providers({children}: {children: React.ReactNode}) {
  // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <NextThemesProvider
                attribute='class'
                defaultTheme='dark'
                themes={['light', 'dark', 'modern']}>
                    {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
}