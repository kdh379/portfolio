import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { clsx } from "clsx";

import style from "./_button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ClassNameProps {
}

export default function Button( props: PropsWithChildren<ButtonProps> ) {

    const {
        className,
        type = "button",
        children,
        ...restProps
    } = props;

    return <button type={type}
        className={clsx( className, style.button )}
        {...restProps}
    >{children}</button>;
}