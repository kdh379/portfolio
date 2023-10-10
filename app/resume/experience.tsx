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
        <h2>{name}</h2>
        <p>{subtitle}</p>
        <ul>
            <li>
                <h3>역할</h3>
                <div className="flex gap-2 flex-wrap mt-2">
                    {roleList.map( ( role ) =>
                        <Tag key={role}>{role}</Tag> )}
                </div>
            </li>
            <li>
                <h3>주요 업무</h3>
                <List.Wrapper>
                    {majors.map( ( major ) => <List.Item key={major}>
                        {major}
                    </List.Item> )}
                </List.Wrapper>
            </li>
            <li>
                { feature.length > 0 && <>
                    <h3>강점</h3>
                    <List.Wrapper>
                        {feature.map( ( feature ) => <List.Item key={feature}>
                            {feature}
                        </List.Item> )}
                    </List.Wrapper>
                </> }
            </li>
            <li>
                <h3>내용</h3>
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

    return <article className={style["experience-item"]}>
        <hgroup>
            <h2>{company}</h2>
            <p>{belong}</p>
            <Tag>{period}</Tag>
            <List.Wrapper className="mt-2">
                {task.map( ( task ) => <List.Item key={task}>{task}</List.Item> )}
            </List.Wrapper>
        </hgroup>
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