import { BiDotsHorizontalRounded, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTypescript, BiPalette } from "react-icons/bi";

import style from "./_skills.module.scss";

import List from "components/list/list";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/skills.json";

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
            <div>
                <h2>{title}</h2>
                <ol>
                    {keywords.map( ( keyword ) => <li key={keyword}>
                        <Tag>{keyword}</Tag>
                    </li> )}
                </ol>
            </div>
        </hgroup>
        <List.Wrapper className="text-sm">
            {details?.map( ( detail ) => <List.Item key={detail}>{detail}</List.Item> )}
        </List.Wrapper>
    </li>;
}

export default function Skills() {

    return <Section id="Skills">
        <ul className={style.skills}>
            {data.skills.map( ( skill ) => <SkillItem key={skill.id}
                {...skill} /> )}
        </ul>
    </Section>;
}