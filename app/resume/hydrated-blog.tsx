import { Hydrate, dehydrate } from "@tanstack/react-query";

import Blog from "./blog";

import getQueryClient from "app/query-client";
import AsyncBoundary from "components/boundary/async-boundary";
import { api } from "utils/api";
import { getTistoryAccessToken } from "utils/tistory-token";

export default function HydratedBlog() {

    return <AsyncBoundary
        serverErrorFallback={<ErrorFallback />}
    >
        <HydratedBlogQuery />
    </AsyncBoundary>;
}

function ErrorFallback( ) {
    return <div>Tistory API Failed</div>;
}

async function HydratedBlogQuery() {
    const queryClient = getQueryClient();
    await queryClient.fetchQuery( {
        queryKey: ["tistory.getPost"],
        queryFn: () => api( {
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