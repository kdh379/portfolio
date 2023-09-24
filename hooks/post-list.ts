"use client";

import { useQuery } from "@tanstack/react-query";

import { request } from "api/request";

export default function usePostList( props: TistoryGetPostReqParam ) {
    return useQuery( {
        queryKey: ["tistory.getPost", props],
        queryFn: () => request( {
            key: "tistory.getPost",
            params: props,
        } ),
        suspense: true,
        refetchOnWindowFocus: false,
    } );
}