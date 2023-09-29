import { PropsWithChildren } from "react";

import style from "./_app.module.scss";

import { AppHeader } from "components/app-header";
import { Sidebar } from "components/sidebar";

export default function App( props: PropsWithChildren ) {
    return (
        <>
            <div className={style.app}>
                <AppHeader />
                <Sidebar />
                {props.children}
            </div>
        </>
    );
}