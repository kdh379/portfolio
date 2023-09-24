"use client";

import { useQuery } from "@tanstack/react-query";

import { api } from "utils/api";

export default function usePostList( props: TistoryGetPostReqParam ) {
    return useQuery( {
        queryKey: ["tistory.getPost", props],
        queryFn: () => api( {
            key: "tistory.getPost",
            params: props,
        } ),
        suspense: true,
        refetchOnWindowFocus: false,
    } );
}