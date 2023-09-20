import { PropsWithChildren } from "react";

import style from "./_project.module.scss";

interface ProjectProps {
    name: string;
    image: string[];
}

export default function Project( props: PropsWithChildren<ProjectProps> ) {

    const {
        name,
        children,
        image,
    } = props;

    return <li className={style["project-item"]}>
        <figure>
            {image.length === 0 && <p>No Image</p>}
        </figure>
        <figcaption>
            <h3>{name}</h3>
            <table>
                <tbody>
                    {children}
                </tbody>
            </table>
        </figcaption>
    </li>;
}