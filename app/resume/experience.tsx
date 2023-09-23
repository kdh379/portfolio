"use client";

import style from "./_experience.module.scss";

import Carousel from "components/carousel/carousel";
import Header from "components/header";
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
        detail,
        images,
        name,
        subtitle,
        feature,
    } = props;

    return <li className={style["project"]}>
        <div className={style["project-info__wrapper"]}>
            <div className={style["project-info__detail"]}>
                <hgroup>
                    <header>{name}</header>
                    <p>{subtitle}</p>
                </hgroup>
                <ul>
                    <li>
                        <h4>역할</h4>
                        <ul className="flex gap-2">
                            {roleList.map( ( role ) => <li key={role}>
                                <Tag>{role}</Tag>
                            </li> )}
                        </ul>
                    </li>
                    <li>
                        <h4>주요 업무</h4>
                        <ul>
                            {majors.map( ( major ) => <li key={major}
                                className="list-disc ml-4">
                                {major}
                            </li> )}
                        </ul>
                    </li>
                </ul>
            </div>
            { images.length > 0 &&
                <Carousel.Wrapper className={style["project-info__carousel"]}>
                    {images.map( ( src ) => <Carousel.Item key={src}>
                        <img
                            key={src}
                            alt="InnoManager"
                            src={src}
                        />
                    </Carousel.Item> )}
                </Carousel.Wrapper>
            }
        </div>
        <ul>
            <li>
                { feature.length > 0 && <>
                    <h4>강점</h4>
                    <ul>
                        {feature.map( ( feature ) => <li key={feature}
                            className="list-disc ml-4">
                            {feature}
                        </li> )}
                    </ul>
                </> }
            </li>
            <li>
                <h4>내용</h4>
                <p>{detail}</p>
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
            {project.map( ( project ) =>
                <ProjectItem key={project.id}
                    {...project} /> )}
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