import { useQuery } from "@tanstack/react-query";

import { api, getAPIInfo } from "utils/api";

export const getPostList = ( props: TistoryGetPostReqParam ) => api( {
    key: getAPIInfo( "tistory.getPost" ).key,
    params: props,
} );

export default function usePostList( props: TistoryGetPostReqParam ) {
    const { key } = getAPIInfo( "tistory.getPost" );

    return useQuery( {
        queryKey: [key, props],
        queryFn: () => getPostList( props ),
    } );
}