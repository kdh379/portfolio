import { FaMapMarkerAlt, FaPhone, FaRegEnvelopeOpen } from "react-icons/fa";

import style from "./_contact.module.scss";

import Section from "components/section";
import Title from "components/title";
import data from "data/profile.json";
import { useResume } from "hooks/resume-list";

export default function Contact() {

    const { href, icon, title } = useResume( "Contact" );

    return <Section id={href}>
        <Title
            headerText={title}
            icon={icon}
        />
        <ul className={style.contact}>
            <li>
                <FaPhone />
                <h2>Call us</h2>
                <p>{data.phone}</p>
            </li>
            <li>
                <FaRegEnvelopeOpen />
                <h2>Email us</h2>
                <p>{data.email}</p>
            </li>
            <li>
                <FaMapMarkerAlt />
                <h2>Visit us</h2>
                <p>{data.address}</p>
            </li>
        </ul>
    </Section>;
}