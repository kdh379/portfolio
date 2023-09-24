import { Hydrate, dehydrate } from "@tanstack/react-query";

import Blog from "./blog";

import { request } from "api/request";
import getQueryClient from "app/query-client";
import AsyncBoundary from "components/boundary/async-boundary";
import { getTistoryAccessToken } from "utils/tistory-token";

export default async function HydratedBlog() {
    // return <AsyncBoundary
    //     serverErrorFallback={<ErrorFallback />}
    // >
    //     <HydratedBlogQuery />
    // </AsyncBoundary>;

    const queryClient = getQueryClient();
    await queryClient.fetchQuery( {
        queryKey: ["tistory.getPost"],
        queryFn: () => request( {
            key: "tistory.getPost",
            params: {
                blogName: "gomban",
                access_token: getTistoryAccessToken(),
            },
        } ),
    } );
    const dehydratedState = dehydrate( queryClient );

    return (
        <Hydrate state={dehydratedState}>
            <Blog />
        </Hydrate>
    );
}

// function ErrorFallback( ) {
//     return <></>;
// }

// async function HydratedBlogQuery() {
//     const queryClient = getQueryClient();
//     await queryClient.fetchQuery( {
//         queryKey: ["tistory.getPost"],
//         queryFn: () => request( {
//             key: "tistory.getPost",
//             params: {
//                 blogName: "gomban",
//                 access_token: getTistoryAccessToken(),
//             },
//         } ),
//     } );
//     const dehydratedState = dehydrate( queryClient );

//     return (
//         <Hydrate state={dehydratedState}>
//             <Blog />
//         </Hydrate>
//     );
// }