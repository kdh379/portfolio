import style from "./_experience.module.scss";

import List from "components/list/list";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/experience.json";

type ExperienceItemProps = typeof data.experience[number];
type ProjectItemProps = ExperienceItemProps["project"][number];

function ProjectItem( props: ProjectItemProps ) {

    const {
        roleList,
        majors,
        detail,
        name,
        subtitle,
        feature,
    } = props;

    return <li className={style.project}>
        <h4>{name}</h4>
        <p>{subtitle}</p>
        <ul>
            <li>
                <h5>역할</h5>
                <div className="flex gap-2 flex-wrap mt-2">
                    {roleList.map( ( role ) =>
                        <Tag key={role}>{role}</Tag> )}
                </div>
            </li>
            <li>
                <h5>주요 업무</h5>
                <List.Wrapper>
                    {majors.map( ( major ) => <List.Item key={major}>
                        {major}
                    </List.Item> )}
                </List.Wrapper>
            </li>
            <li>
                { feature.length > 0 && <>
                    <h5>강점</h5>
                    <List.Wrapper>
                        {feature.map( ( feature ) => <List.Item key={feature}>
                            {feature}
                        </List.Item> )}
                    </List.Wrapper>
                </> }
            </li>
            <li>
                <h5>내용</h5>
                <ol>
                    {detail.map( ( detail ) => <li key={detail.id}>
                        <h4>{detail.title}</h4>
                        <List.Wrapper>
                            {detail.content.map( ( content ) =>
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
        <h3>TechStack</h3>
        <ul className="flex gap-2 flex-wrap">
            {props.techStack.map( ( tech ) =>
                <Tag key={tech}>{tech}</Tag> )}
        </ul>
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