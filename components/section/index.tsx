import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_section.module.scss";

interface SectionProps {
    id: string;
    className?: string;
}

export default function Section( props: PropsWithChildren<SectionProps> ) {
    const { id, className } = props;
    return (
        <section id={id}
            className={clsx( style.section, className )}>
            {props.children}
        </section>
    );
}