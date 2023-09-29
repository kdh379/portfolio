"use client";

import { AiFillPrinter } from "react-icons/ai";

import style from "./_print-button.module.scss";

import Button from "components/button";

export default function PrintButton() {
    return <Button
        aria-label="Print"
        className={style["print-button"]}
        onClick={() => window.print()}>
        <AiFillPrinter />
    </Button>;
}