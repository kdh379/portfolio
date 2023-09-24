import style from "./_page.module.scss";
import AboutMe from "./about-me";
import Contact from "./contact";
import Experience from "./experience";
import HydratedBlog from "./hydrated-blog";
import Skills from "./skills";

export default function Resume() {
    return <main className={style.main}>
        <AboutMe />
        <Skills />
        <Experience />
        <HydratedBlog />
        <Contact />
    </main>;
}