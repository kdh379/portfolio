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

    return <li className="flex flex-col p-4 mt-4 transition-colors rounded-md bg-base-200 hover:bg-base-300">
        <h2>{title}</h2>
        <h3 className="text-lg opacity-75">{subTitle}</h3>
        <Tag>{date}</Tag>
        <List.Wrapper className="mt-2">
            {content.map( ( item, index ) =>
                <List.Item key={index}>{item}</List.Item> )}
        </List.Wrapper>
    </li>;
}

export default function Education() {

    return <Section id="Education">
        <ul>
            {EducationItemProps.education.map( ( education ) =>
                <EducationItem key={education.id}
                    {...education} /> )}
        </ul>
    </Section>;
}