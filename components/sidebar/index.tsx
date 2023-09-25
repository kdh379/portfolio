"use client";

import { memo, useState } from "react";

import { clsx } from "clsx";
import Image from "next/image";
import { BiCode, BiLogoGithub, BiMoon, BiSun } from "react-icons/bi";
import { SiTistory } from "react-icons/si";

import style from "./_sidebar.module.scss";

import Button from "components/button";
import data from "data/profile.json";
import { Resume, useResumeList } from "hooks/resume-list";

declare type Theme = "light" | "dark";

const BI_ICON_SIZE = 24;
const SI_ICON_SIZE = 16;

interface SidebarNavItemProps extends Resume {
    onClick: () => void;
}

function SidebarNavItem( props: SidebarNavItemProps ) {

    const { title, href, icon, onClick } = props;

    return <li className={style["sidebar__nav-item"]}>
        <a href={`#${href}`}
            onClick={onClick}>
            {icon}
            {title}
        </a>
    </li>;
}

export const Sidebar = memo( () => {

    const resumeList = useResumeList();

    const [theme, setTheme] = useState<Theme>( "dark" );

    const handleThemeChange = ( theme: Theme ) => {
        const html = document.querySelector( "html" );

        if( !html ) return;

        html.dataset.theme = theme;
        setTheme( theme );
    };

    const handleSidebarClose = () => {
        const html = document.querySelector( "html" );

        if( !html ) return;

        html.dataset.sidebar = "false";
    };

    return <>
        <div
            tabIndex={-1}
            className={style["sidebar__overlay"]}
            onClick={handleSidebarClose}
            onKeyDown={handleSidebarClose}
            role="button"
        ></div>
        <header className={style.sidebar}>
            <div className={style.sidebar__wrapper}>
                <div className={style.sidebar__profile}>
                    <Image src="/images/profile.jpg"
                        alt="Profile"
                        width={300}
                        height={300} />
                </div>
                <hgroup>
                    <header>{data.name}</header>
                    <p>{data.job}</p>
                </hgroup>
                <nav>
                    <ul>
                        {resumeList.map( ( { title, href, icon } ) =>
                            <SidebarNavItem key={href}
                                title={title}
                                href={href}
                                icon={icon}
                                onClick={handleSidebarClose} /> )}
                    </ul>
                </nav>
                <div className={style.sidebar__action}>
                    <BiSun
                        className={clsx(
                            style["sidebar__action--button"],
                            theme === "light" && "opacity-100",
                        )}
                        onClick={() => handleThemeChange( "light" )}
                        size={BI_ICON_SIZE} />
                    <span className="border"></span>
                    <BiMoon
                        className={clsx(
                            style["sidebar__action--button"],
                            theme === "dark" && "opacity-100",
                        )}
                        onClick={() => handleThemeChange( "dark" )}
                        size={BI_ICON_SIZE} />
                </div>
                <div className={style.sidebar__footer}>
                    <ol>
                        <li>
                            <a href={data.links.github}
                                target="_blank"
                                rel="noreferrer">
                                <Button className={style.sidebar__link}
                                    aria-label="Github">
                                    <BiLogoGithub size={BI_ICON_SIZE} />
                                </Button>
                            </a>
                        </li>
                        <li>
                            <a href={data.links.blog}
                                target="_blank"
                                rel="noreferrer">
                                <Button className={style.sidebar__link}
                                    aria-label="Tistory">
                                    <SiTistory size={SI_ICON_SIZE} />
                                </Button>
                            </a>
                        </li>
                        <li>
                            <a href={data.links.code}
                                target="_blank"
                                rel="noreferrer">
                                <Button className={style.sidebar__link}
                                    aria-label="Code">
                                    <BiCode size={BI_ICON_SIZE} />
                                </Button>
                            </a>
                        </li>
                    </ol>
                    <p>© 2023 {data.engName}</p>
                </div>
            </div>
        </header>
    </>;
} );

Sidebar.displayName = "Sidebar";
export default Sidebar;