import AboutMe from "./about-me";
import Blog from "./blog";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";

export default function Resume() {
    return <main>
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
    </main>;
}