"use client";

import { memo, useState } from "react";

import { clsx } from "clsx";
import Image from "next/image";
import { BiCode, BiLogoGithub, BiMoon, BiSun } from "react-icons/bi";
import { SiTistory } from "react-icons/si";

import style from "./_sidebar.module.scss";

import Button from "components/button";
import data from "data/profile.json";
import { useResumeList } from "hooks/resume-list";

declare type Theme = "light" | "dark";

const ICON_SIZE = 24;

const ICON_MAP = {
    "github": <BiLogoGithub size={24} />,
    "blog": <SiTistory size={16} />,
    "code": <BiCode size={24} />,
};

export const Sidebar = memo( () => {

    const resumeList = useResumeList();

    const [theme, setTheme] = useState<Theme>( "light" );

    const handleThemeChange = ( theme: Theme ) => {
        const html = document.querySelector( "html" );

        if( !html ) return;

        html.dataset.theme = theme;
        setTheme( theme );
    };

    return <nav className={style.sidebar}>
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
            <div className={style.sidebar__action}>
                <BiSun
                    className={clsx(
                        style["sidebar__action--button"],
                        theme === "light" && "opacity-100",
                    )}
                    onClick={() => handleThemeChange( "light" )}
                    size={ICON_SIZE} />
                <span className="border"></span>
                <BiMoon
                    className={clsx(
                        style["sidebar__action--button"],
                        theme === "dark" && "opacity-100",
                    )}
                    onClick={() => handleThemeChange( "dark" )}
                    size={ICON_SIZE} />
            </div>
            <div className={style.sidebar__footer}>
                <ol>
                    <li>
                        <Button className={style.sidebar__link}>
                            <a href={data.links.github}
                                target="_blank"
                                rel="noreferrer">
                                {ICON_MAP.github}
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button className={style.sidebar__link}>
                            <a href={data.links.blog}
                                target="_blank"
                                rel="noreferrer">

                                {ICON_MAP.blog}
                            </a>
                        </Button>
                    </li>
                    <li>
                        <Button className={style.sidebar__link}>
                            <a href={data.links.code}
                                target="_blank"
                                rel="noreferrer">
                                {ICON_MAP.code}
                            </a>
                        </Button>
                    </li>
                </ol>
                <p>© 2023 {data.engName}</p>
            </div>
        </div>
    </nav>;
} );

Sidebar.displayName = "Sidebar";
export default Sidebar;