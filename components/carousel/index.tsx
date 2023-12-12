"use client";

import React, { PropsWithChildren, useRef, useState } from "react";

import { clsx } from "clsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import style from "./_carousel.module.scss";

interface WrapperProps<T> {
    slidePerView?: number;
    className?: string;
    dataList: T[];
    renderItem: ( item: T, index: number ) => JSX.Element;
}

const getNodeWidth = ( ref: React.RefObject<HTMLElement> ) =>
{
    if( !ref.current ) throw new Error( "Invalid carousel item" );

    return ref.current.offsetWidth;
};

const INIT_CAROUSEL_STATE = {
    activeIndex: 0,
    translate: 0,
};

export default function Carousel<T>( props: PropsWithChildren<WrapperProps<T>> )
{
    const {
        slidePerView = 1,
        className,
        dataList,
        renderItem,
    } = props;

    const [carouselState, setCarouselState] = useState( INIT_CAROUSEL_STATE );
    const activeElementRef = useRef<HTMLLIElement>( null );
    const prevElementRef = useRef<HTMLLIElement>( null );

    const handleNextClick = () =>
    {
        setCarouselState( {
            translate: carouselState.translate + getNodeWidth( activeElementRef ),
            activeIndex: carouselState.activeIndex + 1,
        } );
    };

    const handlePrevClick = () =>
    {
        setCarouselState( {
            translate: carouselState.translate - getNodeWidth( prevElementRef ),
            activeIndex: carouselState.activeIndex - 1,
        } );
    };

    return <div className={clsx( style.carousel, className )}>
        <button
            disabled={carouselState.activeIndex === 0}
            onClick={handlePrevClick}
        >
            <FaChevronLeft />
        </button>
        <article className="ir-overflow-hidden ir-w-full">
            <ul
                className={clsx( style.carousel__wrapper )}
                style={{
                    transform: `translateX(-${carouselState.translate}px)`,
                    ["--slide-per-view" as string]: slidePerView,
                }}
            >
                {
                    dataList?.map( ( item, index ) =>
                    {
                        const isCurrentActive = index === carouselState.activeIndex;
                        const isPrev = index === carouselState.activeIndex - 1;

                        return <li key={index}
                            ref={isCurrentActive ? activeElementRef : isPrev ? prevElementRef : null}
                            className={style.carousel__item}>
                            {renderItem( item, index )}
                        </li>;
                    } )
                }
            </ul>
        </article>
        <button
            className="ir-ml-auto"
            disabled={carouselState.activeIndex >= dataList.length - slidePerView}
            onClick={handleNextClick}
        >
            <FaChevronRight />
        </button>
    </div>;
}