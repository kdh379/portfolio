"use client";

import style from "./_blog.module.scss";

import Tag from "components/tag";
import useCategoryList from "hooks/category-list";
import usePostList from "hooks/post-list";

interface BlogPostItemProps extends TistoryPost {
    category?: string;
}

function BlogPostItem( props: BlogPostItemProps ) {
    const {
        title,
        postUrl,
        date,
        category,
    } = props;

    return <li>
        <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Tag>{category}</Tag>
            <h3>{title}</h3>
            <p>{date}</p>
        </a>
    </li>;
}

const getCategoryLabel = ( categoryId: string, categoryList?: TistoryCategory[] ) => {

    if( !categoryList ) console.error( "Tistory Category List is undefined" );

    return categoryList?.find( ( category ) => category.id === categoryId )?.name;
};

export default function BlogPost( props: TistoryGetPostReqParam ) {

    const { data } = usePostList( props );
    const { data: categoryData } = useCategoryList( props );

    return <ul className={style.blog__post}>
        {data?.tistory.item.posts.slice( 0, 4 ).map( ( post ) => {
            return <BlogPostItem key={post.id}
                {...post}
                category={getCategoryLabel( post.categoryId, categoryData?.tistory.item.categories )} />;
        } )}
    </ul>;
}