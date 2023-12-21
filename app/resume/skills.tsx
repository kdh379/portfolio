
"use client";

import { BiDotsHorizontalRounded, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTypescript, BiPalette } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

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

    return <li className="p-2 transition-colors rounded-md bg-base-200 hover:bg-base-300">
        <hgroup className="flex items-center mb-3 gap-x-2">
            <IconContext.Provider value={{ className: "min-w-[3.5rem] h-14 text-accent-content" }}>
                {ICON_MAP[id]}
            </IconContext.Provider>
            <div>
                <h2 className="text-xl font-bold text-accent-content">{title}</h2>
                <ol className="flex flex-wrap mt-1 text-sm gap-x-2 gap-y-3">
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
        <ul className="flex flex-col space-y-4">
            {data.skills.map( ( skill ) => <SkillItem key={skill.id}
                {...skill} /> )}
        </ul>
    </Section>;
}