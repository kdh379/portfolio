"use client";

import Header from "components/header";
import Section from "components/section";
import usePostList from "hooks/post-list";
import { useResume } from "hooks/resume-list";
import { getTistoryAccessToken } from "utils/tistory-token";

export default function Blog( ) {

    const { href, icon, title } = useResume( "Blog" );

    const { data } = usePostList( {
        blogName: "gomban",
        access_token: getTistoryAccessToken(),
    } );

    console.log( data );

    return <Section id={href}>
        <Header
            headerText={title}
            icon={icon}
        />
        {data?.tistory.status}
    </Section>;
}