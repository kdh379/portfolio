import { PropsWithChildren } from "react";

import style from "./_app.module.scss";

import { Sidebar } from "components/sidebar";

export default function App( props: PropsWithChildren ) {
    return (
        <div className={style.app}>
            <Sidebar />
            {props.children}
        </div>
    );
}