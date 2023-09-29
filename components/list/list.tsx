import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_list.module.scss";

function Wrapper( props: PropsWithChildren<ClassNameProps> ) {
    return <ul className={clsx( style.list, props.className )}>
        {props.children}
    </ul>;
}

function Item( props: PropsWithChildren<ClassNameProps> ) {
    return <li className={props.className}>
        {props.children}
    </li>;
}

export default {
    Wrapper,
    Item,
};