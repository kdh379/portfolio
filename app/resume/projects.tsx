import { BiHomeAlt, BiLogoGithub } from "react-icons/bi";

import style from "./_projects.module.scss";

import Header from "components/header";
import Project from "components/project";
import Section from "components/section";
import data from "data/projects.json";
import { useResume } from "hooks/resume-list";

type ProjectItemProps = typeof data.projects[0];

function ProjectItem( props: ProjectItemProps ) {
    const {
        period,
        description,
        github,
        link,
    } = props;

    return <>
        <tr>
            <th>기간</th>
            <td>{period}</td>
        </tr>
        <tr>
            <th>설명</th>
            <td>
                <p>{description}</p>
            </td>
        </tr>
        <tr>
            <th>링크</th>
            <td>
                <ul className={style.link}>
                    <li>
                        <BiHomeAlt />
                        <a href={link}
                            target="_blank"
                            rel="noreferrer"
                        >홈페이지</a>
                    </li>
                    <li>
                        <BiLogoGithub />
                        <a href={github}
                            target="_blank"
                            rel="noreferrer"
                        >GitHub</a>
                    </li>
                </ul>
            </td>
        </tr>
    </>;
}

export default function Projects() {

    const resume = useResume( "Projects" );

    return <Section id={resume.href}>
        <Header
            headerText={resume.title}
            icon={resume.icon}
        />
        {data.projects.map( ( project ) =>
            <Project key={project.id}
                {...project} >
                <ProjectItem {...project} />
            </Project> )}
    </Section>;
}