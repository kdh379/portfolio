import { useQuery } from "@tanstack/react-query";

import api, { getAPIInfo } from "utils/api";

export const getCategoryList = ( props: TistoryGetCategoryReqParam ) => api( {
    key: getAPIInfo( "tistory.getCategory" ).key,
    params: props,
} );

export default function useCategoryList( props: TistoryGetCategoryReqParam ) {
    return useQuery( {
        queryKey: [getAPIInfo( "tistory.getCategory" ).key, props],
        queryFn: () => getCategoryList( props ),
    } );
}