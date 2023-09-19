import { BiDotsHorizontalRounded, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTypescript, BiPalette } from "react-icons/bi";

import style from "./_skills.module.scss";

import Header from "components/header";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/skills.json";
import { useResume } from "hooks/resume-list";

type SkillItemProps = typeof data.skills[0];

const ICON_MAP: {[key: number]: JSX.Element} = {
    0: <BiLogoHtml5 />,
    1: <BiLogoCss3 />,
    2: <BiPalette />,
    3: <BiLogoJavascript />,
    4: <BiLogoTypescript />,
    5: <BiLogoReact />,
    6: <BiLogoNodejs />,
    7: <BiDotsHorizontalRounded />,
};

function SkillItem( props: SkillItemProps ) {

    const {
        title,
        details,
        id,
        keywords,
    } = props;

    return <li className={style["skill-item"]}>
        <hgroup>
            {ICON_MAP[id]}
            <header>
                <h3>{title}</h3>
                <ol>
                    {keywords.map( ( keyword ) => <li key={keyword}>
                        <Tag>{keyword}</Tag>
                    </li> )}
                </ol>
            </header>
        </hgroup>
        <ol>
            {details?.map( ( detail ) => <li key={detail}>{detail}</li> )}
        </ol>
    </li>;
}

export default function Skills() {

    const resume = useResume( "Skills" );

    return <Section id="skills" >
        <Header
            icon={resume.icon}
            headerText={resume.title}
        />
        <ul className={style.skills}>
            {data.skills.map( ( skill ) => <SkillItem key={skill.id}
                {...skill} /> )}
        </ul>
    </Section>;
}