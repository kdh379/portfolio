import { BiLogoGithub } from "react-icons/bi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { SiTistory } from "react-icons/si";

import style from "./_about-me.module.scss";

import List from "components/list/list";
import Section from "components/section";
import data from "data/profile.json";

const ICON_MAP: {[key: string]: JSX.Element} = {
    github: <BiLogoGithub />,
    blog: <SiTistory />,
    resume: <BsFillFileEarmarkPersonFill />,
};

function ChannelItem( props: typeof data.channels[number] ) {

    const { name, url, description } = props;

    return <li className={style.channel__li}>
        {ICON_MAP[name]}
        <div>
            <a href={url}
                target="_blank"
                rel="noopener noreferrer"
            >{url}
            </a>
            <p>
                {description}
            </p>
        </div>
    </li>;
}

export default function AboutMe() {

    return <Section id="About Me">
        <div className={style["about-me"]}>
            <h1>{data.title}</h1>
            <h2>Introduction</h2>
            <List.Wrapper>
                {data.introduction.map( ( introduction ) =>
                    <List.Item key={introduction}>{introduction}</List.Item> )}
            </List.Wrapper>
            <h2>Contact</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Birthday</th>
                        <td>{data.birth}</td>
                    </tr>
                    <tr>
                        <th>Visit us</th>
                        <td>{data.address}</td>
                    </tr>
                    <tr>
                        <th>Email us</th>
                        <td>{data.email}</td>
                    </tr>
                    <tr>
                        <th>Channel</th>
                        <td>
                            <ul>
                                {data.channels.map( ( channel ) =>
                                    <ChannelItem key={channel.name}
                                        {...channel} /> )}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Section>;
}