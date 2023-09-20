import style from "./_experience.module.scss";

import Header from "components/header";
import Project from "components/project";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/experience.json";
import { useResume } from "hooks/resume-list";

type ExperienceItemProps = typeof data.experience[number];
type ProjectItemProps = ExperienceItemProps["project"][number];

function ProjectItem( props: ProjectItemProps ) {

    const {
        roleList,
        majors,
        performance,
        detail,
    } = props;

    return <>
        <tr>
            <th>역할</th>
            <td>
                <div className="flex flex-wrap gap-2">
                    {roleList.map( ( role ) => <Tag key={role}>{role}</Tag> )}
                </div>
            </td>
        </tr>
        <tr>
            <th>주요 업무</th>
            <td>
                {majors.map( ( major ) =>
                    <p key={major}>{major}</p> )}
            </td>
        </tr>
        <tr>
            <th>성과</th>
            <td>{performance}</td>
        </tr>
        <tr>
            <th>내용</th>
            <td>
                <p>{detail}</p>
            </td>
        </tr>
    </>;
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
        <Tag>{period}</Tag>
        <hgroup>
            <header>{company}</header>
            <span>{belong}</span>
            <ol>
                {task.map( ( task ) => <li key={task}>{task}</li> )}
            </ol>
        </hgroup>
        <h3>Projects</h3>
        <ul>
            {project.map( ( project ) => <Project key={project.projectId}
                name={project.projectName}
                image={project.image} >
                <ProjectItem {...project} />
            </Project> )}
        </ul>
    </article>;
}

export default function Experience() {

    const resume = useResume( "Experience" );

    return <Section id={resume.href}>
        <Header
            headerText={resume.title}
            icon={resume.icon}
        />
        {data.experience.map( ( experience ) =>
            <ExperienceItem key={experience.id}
                {...experience} /> )}

    </Section>;
}