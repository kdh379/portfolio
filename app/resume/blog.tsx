import { Hydrate, dehydrate } from "@tanstack/react-query";

import BlogPost from "./blog-post";

import getQueryClient from "app/query-client";
import AsyncBoundary from "components/boundary/async-boundary";
import Header from "components/header";
import Section from "components/section";
import { useResume } from "hooks/resume-list";
import { api } from "utils/api";
import { getTistoryAccessToken } from "utils/tistory-token";

const POST_LIST_PARAMS = {
    blogName: "gomban",
    access_token: getTistoryAccessToken(),
};

export default function Blog() {

    const { href, icon, title } = useResume( "Blog" );

    return <Section id={href}>
        <Header
            headerText={title}
            icon={icon}
        />
        <AsyncBoundary
            serverErrorFallback={<ErrorFallback />}
        >
            <HydratedBlog />
        </AsyncBoundary>
    </Section>;
}

function ErrorFallback( ) {
    return <div>Tistory API Failed</div>;
}

async function HydratedBlog() {

    const params = POST_LIST_PARAMS;

    const queryClient = getQueryClient();
    await queryClient.fetchQuery( {
        queryKey: ["tistory.getPost"],
        queryFn: () => api( {
            key: "tistory.getPost",
            params,
        } ),
    } );
    const dehydratedState = dehydrate( queryClient );

    return (
        <Hydrate state={dehydratedState}>
            <BlogPost {...params} />
        </Hydrate>
    );
}