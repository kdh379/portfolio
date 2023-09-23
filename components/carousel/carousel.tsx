import React, { PropsWithChildren, useRef, useState } from "react";

import { clsx } from "clsx";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import style from "./_carousel.module.scss";

import Button from "components/button";

interface CarouselWrapperProps {
    className?: string;
}

function Wrapper( props: PropsWithChildren<CarouselWrapperProps> ) {
    const { children, className } = props;
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

    return <div className={clsx( style.carousel, className )}>
        { !isStartPoint && <Button className={clsx( style["carousel__button"], "left-3" )}
            onClick={handlePrevClick}>
            <BiChevronLeft size={32} />
        </Button>}
        <div
            ref={wrapperRef}
            className={style.carousel__wrapper}
            style={{ transform: `translateX(-${current * 100}%)` }}>
            {children}
        </div>
        { !isEndPoint && <Button className={clsx( style["carousel__button"], "right-3" )}
            onClick={handleNextClick}>
            <BiChevronRight size={32} />
        </Button>}
    </div>;
}

function Item( props: PropsWithChildren ) {
    const { children } = props;

    return <div className={style.carousel__item}>
        {children}
    </div>;
}

export default { Wrapper, Item };