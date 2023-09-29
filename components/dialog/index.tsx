"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

import style from "./_dialog.module.scss";

import Button from "components/button";
import Modal from "components/modal";

interface DialogProps extends ClassNameProps {
    isOpen: boolean;

    onClose: ( isShow: boolean ) => void;
}

export default function Dialog( props: PropsWithChildren<DialogProps> ) {

    const {
        isOpen,
        className,
        children,
        onClose,
    } = props;

    const dialogRef = useRef<HTMLDivElement>( null );

    useEffect( () => {
        const handleOutsideClick = ( ev: MouseEvent ) => {

            if ( dialogRef.current && !dialogRef.current.contains( ev.target as Node ) )
                onClose( false );
        };

        if ( isOpen )
            document.addEventListener( "click", handleOutsideClick );

        return () => {
            document.removeEventListener( "click", handleOutsideClick );
        };
    }, [isOpen, onClose] );

    return <Modal layer="dialog">
        <AnimatePresence>
            {isOpen && <>
                <motion.div
                    tabIndex={-1}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={style.dialog}
                >
                    <motion.div
                        ref={dialogRef}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.3 }}
                        className={clsx( style.dialog__wrapper, className )}
                    >
                        <Button
                            className={style["dialog__close-button"]}
                            onClick={() => onClose( false )}
                            aria-label="Close Dialog"
                        >
                            <AiOutlineClose />
                        </Button>
                        {children}
                    </motion.div>
                </motion.div>
            </>}
        </AnimatePresence>
    </Modal>;
}