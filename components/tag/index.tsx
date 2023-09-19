import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_tag.module.scss";

interface TagProps {
    className?: string;
}

export default function Tag( props: PropsWithChildren<TagProps> ) {
    return <span className={clsx( props.className, style.tag )}>
        {props.children}
    </span>;
}