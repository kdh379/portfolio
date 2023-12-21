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

    return <li className={style.blog__item}>
        <a
            href={postUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col items-start"
        >
            <Tag className="mb-2">{category}</Tag>
            <h3>{title}</h3>
            <p className="mt-auto text-sm">{date}</p>
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

    return <ul className="mb-8 mt-4 grid grid-cols-2 gap-4 tablet:grid-cols-4">
        {data?.tistory.item.posts.slice( 0, 4 ).map( ( post ) => {
            return <BlogPostItem key={post.id}
                {...post}
                category={getCategoryLabel( post.categoryId, categoryData?.tistory.item.categories )} />;
        } )}
    </ul>;
}