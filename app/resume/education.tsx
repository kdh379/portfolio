import style from "./_education.module.scss";

import List from "components/list/list";
import Section from "components/section";
import Tag from "components/tag";
import EducationItemProps from "data/education.json";

type EducationItemProps = typeof EducationItemProps.education[number];

function EducationItem( props: EducationItemProps ) {

    const {
        title,
        date,
        content,
        subTitle,
    } = props;

    return <li className={style.education}>
        <h2 >{title}</h2>
        {subTitle && <h3>{subTitle}</h3>}
        <Tag>{date}</Tag>
        <List.Wrapper className="mt-4">
            {content.map( ( item, index ) =>
                <List.Item key={index}>{item}</List.Item> )}
        </List.Wrapper>
    </li>;
}

export default function Education() {

    return <Section id="Education"
        printAvoid>
        <ul>
            {EducationItemProps.education.map( ( education ) =>
                <EducationItem key={education.id}
                    {...education} /> )}
        </ul>
    </Section>;
}