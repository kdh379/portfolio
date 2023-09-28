"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { createPortal } from "react-dom";

const MODAL_LAYER_MAP = [
    "dialog",
] as const;

const getLayoutElement = ( layer: typeof MODAL_LAYER_MAP[number] ) => {

    const element = document.getElementById( layer );

    if ( !element ) throw new Error( `Not found layer element ${layer}` );

    return element;
};

interface ModalProps {
    layer: typeof MODAL_LAYER_MAP[number];
}

export default function Modal( props: PropsWithChildren<ModalProps> ) {

    const [isCSR, setIsCSR] = useState( false );

    useEffect( () => {
        setIsCSR( true );
    }, [] );

    if ( typeof window === "undefined" || !isCSR ) return <></>;

    return createPortal( props.children, getLayoutElement( props.layer ) );
}