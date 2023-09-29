import { Hydrate, dehydrate } from "@tanstack/react-query";

import style from "./_blog.module.scss";
import BlogPost from "./blog-post";

import AsyncBoundary from "components/boundary/async-boundary";
import Button from "components/button";
import Section from "components/section";
import { getCategoryList } from "hooks/category-list";
import { getPostList } from "hooks/post-list";
import { getAPIInfo } from "utils/api";
import getQueryClient from "utils/query-client";
import { getTistoryAccessToken } from "utils/tistory-token";

const POST_LIST_PARAMS = {
    blogName: "gomban",
    access_token: getTistoryAccessToken(),
    output: "json",
} as const;

export default function Blog() {
    return <Section id="Blog"
        printAvoid
    >
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
        queryKey: [getAPIInfo( "tistory.getPost" ), params],
        queryFn: () => getPostList( params ),
    } );
    await queryClient.fetchQuery( {
        queryKey: [getAPIInfo( "tistory.getCategory" ), params],
        queryFn: () => getCategoryList( params ),
    } );

    const dehydratedState = dehydrate( queryClient );

    return (
        <Hydrate state={dehydratedState}>
            <hgroup className={style.blog__header}>
                <h2>최근 포스트</h2>
                <a
                    href="https://gomban.tistory.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button className="p-2">전체보기</Button>
                </a>
            </hgroup>
            <BlogPost {...params} />
        </Hydrate>
    );
}