"use client";

import { useEffect, useState } from "react";

import { clsx } from "clsx";
import { BiMenu } from "react-icons/bi";

import style from "./_app-header.module.scss";

import Button from "components/button";
import data from "data/profile.json";

export default function AppHeader() {

    const [isHeaderVisible, setIsHeaderVisible] = useState( true );
    const [prevScrollY, setPrevScrollY] = useState( 0 );

    useEffect( () => {
        function handleScroll() {
            const currentScrollY = window.scrollY;
            if ( currentScrollY < prevScrollY || currentScrollY === 0 ) {
                setIsHeaderVisible( true );
            } else {
                setIsHeaderVisible( false );
            }
            setPrevScrollY( currentScrollY );
        }

        window.addEventListener( "scroll", handleScroll );
        return () => {
            window.removeEventListener( "scroll", handleScroll );
        };
    }, [prevScrollY] );

    const handleMenuClick = () => {
        const html = document.querySelector( "html" );

        if( !html ) return;

        html.dataset.sidebar = "true";
    };

    return <header className={clsx( style["app-header"], isHeaderVisible && "top-0" )}>
        <h1>{data.name} Portfolio</h1>
        <Button
            onClick={handleMenuClick}
            aria-label="메뉴 열기"
        >
            <BiMenu />
        </Button>
    </header>;
}