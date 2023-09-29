import { PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_section.module.scss";

import { ResumeKey, useResume } from "hooks/resume-list";

interface SectionProps extends ClassNameProps {
    id: ResumeKey;
    printAvoid?: boolean;
}

export default function Section( props: PropsWithChildren<SectionProps> ) {
    const {
        id,
        printAvoid = false,
        className,
        ...restProps
    } = props;

    const resume = useResume( id );

    return (
        <section id={resume.href}
            className={clsx( style.section, className )}
            data-print-avoid={printAvoid}
            {...restProps}>
            <h1>{resume.icon}{resume.id}</h1>
            {props.children}
        </section>
    );
}