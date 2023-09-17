import AboutMe from "./about-me";
import Career from "./career";
import Contact from "./contact";
import Post from "./post";
import Projects from "./projects";
import Skills from "./skills";

export default function Resume() {
    return <main>
        <AboutMe />
        <Skills />
        <Career />
        <Projects />
        <Post />
        <Contact />
    </main>;
}