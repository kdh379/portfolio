import style from "./_experience.module.scss";

import List from "components/list/list";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/experience.json";

type ExperienceItemProps = typeof data.experience[number];
type ProjectItemProps = ExperienceItemProps["project"][number];

const TECH_STACK_LABEL = {
    core: "코어",
    state: "상태 관리",
    styling: "스타일링",
    package: "패키지",
    build: "빌드",
    "ci/cd": "CI/CD",
} as const;

const hasTechStackKey = ( key: string ): key is keyof typeof TECH_STACK_LABEL =>
    Object.keys( TECH_STACK_LABEL ).includes( key );

function ProjectItem( props: ProjectItemProps ) {

    const {
        majors,
        period,
        details,
        name,
        subtitle,
        techStack,
    } = props;

    return <li className={style.project}>
        <h4>{name}</h4>
        <p>{subtitle}</p>
        <ul>
            <li>
                <h5>Period</h5>
                <Tag>{period}</Tag>
            </li>
            <li>
                <h5>Tech Stack</h5>
                <List.Wrapper>
                    {Object.entries( techStack ).map( ( [key, value] ) =>
                        <List.Item key={key}>
                            <p>{hasTechStackKey( key ) && TECH_STACK_LABEL[key]} : {value.join( ", " )}</p>
                        </List.Item> )}
                </List.Wrapper>
            </li>
            <li>
                <h5>What did I do</h5>
                <List.Wrapper>
                    {majors.map( ( major ) => <List.Item key={major}>
                        {major}
                    </List.Item> )}
                </List.Wrapper>
            </li>
            <li>
                <h5>Details</h5>
                <ol>
                    {details.map( ( detail ) => <li key={detail.id}>
                        <h6>{detail.title}</h6>
                        <List.Wrapper>
                            {detail.contents.map( ( content ) =>
                                <List.Item key={content}>{content}</List.Item> )}
                        </List.Wrapper>
                    </li> ) }
                </ol>
            </li>
        </ul>
    </li>;
}

function ExperienceItem( props: ExperienceItemProps ) {

    const {
        period,
        company,
        belong,
        project,
        task,
    } = props;

    return <article className={style.experience}>
        <hgroup>
            <h2>{company}</h2>
            <p>{belong}</p>
            <Tag>{period}</Tag>
        </hgroup>
        <h3>Description</h3>
        <List.Wrapper>
            {task.map( ( task ) => <List.Item key={task}>{task}</List.Item> )}
        </List.Wrapper>
        <h3>Projects</h3>
        <ul>
            {project.map( ( project ) =>
                <ProjectItem key={project.id}
                    {...project} /> )}
        </ul>
    </article>;
}

export default function Experience() {

    return <Section id="Experience"
        printAvoid>
        {data.experience.map( ( experience ) =>
            <ExperienceItem key={experience.id}
                {...experience} /> )}

    </Section>;
}