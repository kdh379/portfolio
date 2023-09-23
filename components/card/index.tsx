import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_card.module.scss";

interface CardProps {
    className?: string;
}

export default function Card( props: PropsWithChildren<CardProps> ) {

    return (
        <div className={clsx( style.card, props.className )}>{props.children}</div>
    );
}