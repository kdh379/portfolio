"use client";

import { useState } from "react";

import Image from "next/image";
import { MdZoomOutMap } from "react-icons/md";

import style from "./_experience.module.scss";

import Carousel from "components/carousel/carousel";
import Dialog from "components/dialog";
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
        images,
        name,
        subtitle,
        feature,
    } = props;

    const [isShowImage, setIsShowImage] = useState( false );

    return <li className={style.project}>
        <div className={style.project__wrapper}>
            <div className={style.project__detail}>
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
                        <List.Wrapper>
                            {majors.map( ( major ) => <List.Item key={major}>
                                {major}
                            </List.Item> )}
                        </List.Wrapper>
                    </li>
                </ul>
            </div>
            { images.length > 0 && <>
                <div className={style["project__image"]}
                    tabIndex={0}
                    onClick={() => setIsShowImage( true )}
                    onKeyDown={() => setIsShowImage( true )}
                    role="button">
                    <MdZoomOutMap className="absolute text-neutral z-10" />
                    <Image src={images[0]}
                        alt="InnoManager"
                        fill
                        sizes="75%"
                        className="rounded-md" />
                </div>
                <Dialog
                    isOpen={isShowImage}
                    className={style["project__image-dialog"]}
                    onClose={() => setIsShowImage( false )}
                >
                    <Carousel.Wrapper>
                        {images.map( ( src ) => <Carousel.Item key={src}>
                            <Image src={src}
                                alt="InnoManager"
                                fill
                                priority />
                        </Carousel.Item> )}
                    </Carousel.Wrapper>
                </Dialog>
            </>
            }
        </div>
        <ul>
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
                    {detail.map( ( detail ) => <li key={detail.title}>
                        <h4>{detail.title}</h4>
                        <p>{detail.content}</p>
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

    return <Section id="Experience">
        {data.experience.map( ( experience ) =>
            <ExperienceItem key={experience.id}
                {...experience} /> )}

    </Section>;
}