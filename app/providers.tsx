"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<QueryClientProvider  client={queryClient}>
			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
		</QueryClientProvider>
	);
}
