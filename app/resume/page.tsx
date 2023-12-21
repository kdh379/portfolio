import AboutMe from "./about-me";
import Blog from "./blog";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

import PrintButton from "components/print-button";

export default function Resume() {

    return <main className="relative pt-appHeader transition-[padding-left] duration-layout desktop:pl-sidebar desktop:pt-0">
        <PrintButton/>
        <AboutMe />
        <Skills />
        <Experience />
        <Education />
        <Blog />
    </main>;
}