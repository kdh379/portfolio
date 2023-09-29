"use client";

import { memo } from "react";

import { clsx } from "clsx";
import { BiMenu } from "react-icons/bi";

import style from "./_app-header.module.scss";

import Button from "components/button";
import data from "data/profile.json";

export const AppHeader = memo( () => {

    const handleMenuClick = () => {
        const html = document.querySelector( "html" );

        if( !html ) return;

        html.dataset.sidebar = "true";
    };

    return <header className={clsx( style["app-header"] )}>
        <h1>{data.name} Portfolio</h1>
        <Button
            onClick={handleMenuClick}
            aria-label="메뉴 열기"
        >
            <BiMenu size={32} />
        </Button>
    </header>;
} );

AppHeader.displayName = "AppHeader";

export default AppHeader;