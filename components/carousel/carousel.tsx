import React, { HTMLAttributes, PropsWithChildren, useRef, useState } from "react";

import { clsx } from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import style from "./_carousel.module.scss";

import Button from "components/button";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
}

function Wrapper( props: PropsWithChildren<CarouselProps> ) {
    const {
        children,
        className,
        ...restProps
    } = props;
    const wrapperRef = useRef<HTMLDivElement>( null );
    const [current, setCurrent] = useState( 0 );
    const [isEndPoint, setIsEndPoint] = useState( false );
    const [isStartPoint, setIsStartPoint] = useState( true );

    const handleNextClick = () => {
        setCurrent( current + 1 );

        setIsStartPoint( false );

        if( current + 1 === React.Children.count( children ) - 1 ) {
            setIsEndPoint( true );
        }
    };

    const handlePrevClick = () => {
        setCurrent( current - 1 );
        setIsEndPoint( false );

        if( current - 1 === 0 ) {
            setIsStartPoint( true );
        }
    };

    return <div className={clsx( style.carousel, className )}
        {...restProps}>
        { <Button className={clsx( style["carousel__button"], "left-3", isStartPoint && "hidden" )}
            onClick={handlePrevClick}
            aria-label="Carousel Prev">
            <BiChevronLeft size={32} />
        </Button>}
        <div
            ref={wrapperRef}
            className={style.carousel__wrapper}
            style={{ transform: `translateX(-${current * 100}%)` }}>
            {children}
        </div>
        { <Button className={clsx( style["carousel__button"], "right-3", isEndPoint && "hidden" )}
            onClick={handleNextClick}
            aria-label="Carousel Next">
            <BiChevronRight size={32} />
        </Button>}
    </div>;
}

function Item( props: PropsWithChildren<CarouselProps> ) {
    const {
        children,
        className,
        ...restProps
    } = props;

    return <div
        className={clsx( style.carousel__item, className )}
        {...restProps}
    >
        {children}
    </div>;
}

export default { Wrapper, Item };