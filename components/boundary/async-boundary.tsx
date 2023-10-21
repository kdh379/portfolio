"use client";

import { ReactElement, Suspense } from "react";

import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

import { hasTistoryError } from "utils/api";

interface AsyncBoundaryProps {
    children: ReactElement;

    suspenseFallback?: ReactElement;
    errorFallback?: ( props: {
        error: AxiosError;
        resetErrorBoundary?: () => void;
        tistoryError?: TistoryErrorRes; } ) => React.ReactNode;
    serverErrorFallback?: ReactElement;
}

export interface AsyncBoundaryErrorProps {
    error: AxiosError;
    resetErrorBoundary: () => void;
    tistoryError?: TistoryErrorRes;
}

const getTistoryError = ( error: AxiosError<TistoryErrorRes> ): TistoryErrorRes | undefined =>
{
    if( !error.response || !hasTistoryError( error ) ) return;

    return error.response.data;
};

export default function AsyncBoundary( props: AsyncBoundaryProps )
{
    const {
        children,
        suspenseFallback,
        errorFallback,
        serverErrorFallback,
    } = props;

    const { reset } = useQueryErrorResetBoundary();
    const { showBoundary } = useErrorBoundary();

    return <ErrorBoundary onReset={reset}
        fallbackRender={( { error, resetErrorBoundary } ) =>
        {
            if( serverErrorFallback ) return serverErrorFallback;
            const tistoryError = getTistoryError( error );

            if( !errorFallback ) showBoundary( error );

            return (
                errorFallback
                    ? errorFallback( { error, resetErrorBoundary, tistoryError } )
                    : <div>
                        <h1>식별되지 않은 오류</h1>
                        <button onClick={() => resetErrorBoundary()}>새로고침</button>
                    </div>
            );
        }}>
        <Suspense fallback={suspenseFallback}>
            {children}
        </Suspense>
    </ErrorBoundary>;
}