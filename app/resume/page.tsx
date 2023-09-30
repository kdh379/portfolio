import style from "./_page.module.scss";
import AboutMe from "./about-me";
import Blog from "./blog";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

import PrintButton from "components/print-button";

export default function Resume() {

    return <main className={style.main}>
        <PrintButton/>
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Blog />
    </main>;
}