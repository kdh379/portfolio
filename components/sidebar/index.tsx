import { memo, useMemo } from "react";

import style from "./_sidebar.module.scss";

const NAV_LIST = [
    {
        title: "About Me",
        href: "#Home",
    },
    {
        title: "Skills",
        href: "#Skills",
    },
    {
        title: "Career",
        href: "#Career",
    },
];

export const Sidebar = memo( () => {
    return <nav className={style.sidebar}>
        <ol>
            {NAV_LIST.map( ( { title, href } ) => {
                return <li key={href}
                    className={style["sidebar__nav-item"]}>
                    <a href={href}>
                        {title}
                    </a>
                </li>;
            } )}
        </ol>
    </nav>;
} );

Sidebar.displayName = "Sidebar";
export default Sidebar;