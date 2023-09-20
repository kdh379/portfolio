import style from "./_about-me.module.scss";

import Section from "components/section";
import data from "data/about-me.json";
import { useResume } from "hooks/resume-list";

export default function AboutMe() {

    const resume = useResume( "About Me" );

    return <Section id={resume.href}
        className="h-screen">
        <div className={style["about-me"]}>
            <hgroup>
                <h3>안녕하세요,</h3>
                <h3>김도현입니다!</h3>
            </hgroup>
            <p>{data.greeting}</p>
        </div>
    </Section>;
}