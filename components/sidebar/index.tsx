import { memo } from "react";

import style from "./_sidebar.module.scss";

import { useResumeList } from "hooks/resume-list";

export const Sidebar = memo( () => {

    const resumeList = useResumeList();

    return <nav className={style.sidebar}>
        <ol>
            {resumeList.map( ( { title, href, icon } ) => {
                return <li key={href}
                    className={style["sidebar__nav-item"]}>
                    <a href={`#${href}`}>
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