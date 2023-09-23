import Header from "components/header";
import Section from "components/section";
import { useResume } from "hooks/resume-list";

export default function Blog() {

    const { href, icon, title } = useResume( "Blog" );

    return <Section id={href}>
        <Header
            headerText={title}
            icon={icon}
        />
    </Section>;
}