import { PropsWithChildren } from "react";

import style from "./_section.module.scss";

interface SectionProps {
    id: string;
}

export default function Section( props: PropsWithChildren<SectionProps> ) {
    const { id } = props;
    return (
        <section id={id}
            className={style.section}>
            {props.children}
        </section>
    );
}