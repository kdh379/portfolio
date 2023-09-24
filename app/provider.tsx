"use client";

import { PropsWithChildren, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";

import CriticalErrorFallback from "components/error/ciritical-error-fallback";

export default function Providers( props: PropsWithChildren ) {

    const { children } = props;

    const [queryClient] = useState( () => new QueryClient( {
        defaultOptions: {
            queries: {
                suspense: true,
                retry: false,
                refetchOnWindowFocus: false,
            },
        },
    } ) );

    return (
        <ErrorBoundary fallback={<CriticalErrorFallback />}>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                {children}
            </QueryClientProvider>
        </ErrorBoundary>
    );
}