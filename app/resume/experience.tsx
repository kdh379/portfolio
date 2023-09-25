"use client";

import Image from "next/image";

import style from "./_experience.module.scss";

import Carousel from "components/carousel/carousel";
import Section from "components/section";
import Tag from "components/tag";
import Title from "components/title";
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
                    <h2>{name}</h2>
                    <p>{subtitle}</p>
                </hgroup>
                <ul>
                    <li>
                        <h3>역할</h3>
                        <div className="flex gap-2 flex-wrap">
                            {roleList.map( ( role ) =>
                                <Tag key={role}>{role}</Tag> )}
                        </div>
                    </li>
                    <li>
                        <h3>주요 업무</h3>
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
                        <Image src={src}
                            alt="InnoManager"
                            width={500}
                            height={250}
                            priority
                            className="rounded-md h-auto" />
                    </Carousel.Item> )}
                </Carousel.Wrapper>
            }
        </div>
        <ul>
            <li>
                { feature.length > 0 && <>
                    <h3>강점</h3>
                    <ul>
                        {feature.map( ( feature ) => <li key={feature}
                            className="list-disc ml-4">
                            {feature}
                        </li> )}
                    </ul>
                </> }
            </li>
            <li>
                <h3>내용</h3>
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
            <h2>{company}</h2>
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
        <Title
            headerText={resume.title}
            icon={resume.icon}
        />
        {data.experience.map( ( experience ) =>
            <ExperienceItem key={experience.id}
                {...experience} /> )}

    </Section>;
}