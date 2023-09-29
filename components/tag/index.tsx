import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_tag.module.scss";

export default function Tag( props: PropsWithChildren<ClassNameProps> ) {
    return <span className={clsx( props.className, style.tag )}>
        {props.children}
    </span>;
}