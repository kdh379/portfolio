"use client";

import usePostList from "hooks/post-list";

export default function BlogPost( props: TistoryGetPostReqParam ) {

    const {
        blogName,
        access_token,
    } = props;

    const { data } = usePostList( {
        blogName,
        access_token,
    } );

    return <>
        {data?.tistory.status}
    </>;
}