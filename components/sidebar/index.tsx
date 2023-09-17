import { memo } from "react";

import { FaUserCircle, FaCode, FaBriefcase, FaFolder, FaRegEdit, FaPhone } from "react-icons/fa";

import style from "./_sidebar.module.scss";

export declare type ResumeTitle = "About Me" | "Skills" | "Career" | "Projects" | "Post" | "Contact";

const RESUME_LIST = [
    {
        title: "About Me",
        href: "#about",
        icon: <FaUserCircle />,
    },
    {
        title: "Skills",
        href: "#skills",
        icon: <FaCode />,
    },
    {
        title: "Career",
        href: "#career",
        icon: <FaBriefcase />,
    },
    {
        title: "Projects",
        href: "#projects",
        icon: <FaFolder />,
    },
    {
        title: "Post",
        href: "#post",
        icon: <FaRegEdit />,
    },
    {
        title: "Contact",
        href: "#contact",
        icon: <FaPhone />,
    },
] as const;

export const Sidebar = memo( () => {
    return <nav className={style.sidebar}>
        <ol>
            {RESUME_LIST.map( ( { title, href, icon } ) => {
                return <li key={href}
                    className={style["sidebar__nav-item"]}>
                    <a href={href}>
                        {icon}
                        {title}
                    </a>
                </li>;
            } )}
        </ol>
    </nav>;
} );

Sidebar.displayName = "Sidebar";
export default Sidebar;