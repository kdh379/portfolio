import style from "./_experience.module.scss";

import Header from "components/header";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/experience.json";
import { useResume } from "hooks/resume-list";

type ExperienceItemProps = typeof data.experience[number];
type ProjectItemProps = ExperienceItemProps["project"][number];

function ProjectItem( props: ProjectItemProps ) {

    const {
        projectName,
        roleList,
        majors,
        performance,
        detail,
    } = props;

    return <li className={style["project-item"]}>
        <figure>
                No Image
        </figure>
        <figcaption>
            <h3>{projectName}</h3>
            <table>
                <tbody>
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
                </tbody>
            </table>
        </figcaption>
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
            {project.map( ( project ) => <ProjectItem key={project.projectId}
                {...project} /> )}
        </ul>
    </article>;
}

export default function Experience() {

    const resume = useResume( "Experience" );

    return <Section id="experience">
        <Header
            headerText={resume.title}
            icon={resume.icon}
        />
        {data.experience.map( ( experience ) =>
            <ExperienceItem key={experience.id}
                {...experience} /> )}

    </Section>;
}