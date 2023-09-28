import style from "./_page.module.scss";
import AboutMe from "./about-me";
import Blog from "./blog";
import Contact from "./contact";
import Experience from "./experience";
import Skills from "./skills";

export default function Resume() {

    return <main className={style.main}>
        <AboutMe />
        <Skills />
        <Experience />
        <Blog />
        <Contact />
    </main>;
}