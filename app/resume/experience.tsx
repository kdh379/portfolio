import List from "components/list/list";
import Section from "components/section";
import Tag from "components/tag";
import data from "data/experience.json";

type ExperienceItemProps = typeof data.experience[number];
type ProjectItemProps = ExperienceItemProps["project"][number];

const TECH_STACK_LABEL = {
    framework: "프레임워크",
    core: "코어",
    state: "상태 관리",
    styling: "스타일링",
    package: "패키지",
    visualization: "시각화",
} as const;

const hasTechStackKey = ( key: string ): key is keyof typeof TECH_STACK_LABEL =>
    Object.keys( TECH_STACK_LABEL ).includes( key );

const getTechStackLabel = ( key: string ) => {
    if( !hasTechStackKey( key ) ) return key;

    return TECH_STACK_LABEL[key];
};

function ProjectItem( props: ProjectItemProps ) {

    const {
        majors,
        period,
        name,
        subtitle,
        techStack,
    } = props;

    return <li className="p-4 mb-4 transition-colors rounded-md bg-base-200 hover:bg-base-300">
        <h4>{name}</h4>
        <p className="mb-4 font-medium tracking-wide transition-colors hover:text-accent-content">{subtitle}</p>
        <ul className="space-y-4">
            <li>
                <h5>Period</h5>
                <Tag>{period}</Tag>
            </li>
            <li>
                <h5>Tech Stack</h5>
                <List.Wrapper>
                    {Object.entries( techStack ).map( ( [key, value] ) =>
                        <List.Item key={key}>
                            <p>{getTechStackLabel( key )} : {value.join( ", " )}</p>
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

    return <article>
        <hgroup className="flex flex-col mb-4">
            <h2>{company}</h2>
            <p className="mb-2 text-sm font-medium tracking-wide opacity-75">{belong}</p>
            <Tag>{period}</Tag>
        </hgroup>
        <h3>Description</h3>
        <List.Wrapper className="mb-4">
            {task.map( ( task ) => <List.Item key={task}>{task}</List.Item> )}
        </List.Wrapper>
        <h3>Projects</h3>
        <ul className="mb-4">
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