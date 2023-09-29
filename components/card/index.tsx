import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_card.module.scss";

export default function Card( props: PropsWithChildren<ClassNameProps> ) {

    return (
        <div className={clsx( style.card, props.className )}>{props.children}</div>
    );
}