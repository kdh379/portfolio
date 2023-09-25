import { FaUserCircle, FaCode, FaBriefcase, FaRegEdit, FaPhone } from "react-icons/fa";

export declare type ResumeTitle = "About Me" | "Skills" | "Experience" | "Projects" | "Blog" | "Contact";

export interface Resume {
    title: ResumeTitle;
    href: string;
    icon: JSX.Element;
}

export const resumeList: Resume[] = [
    {
        title: "About Me",
        href: "about",
        icon: <FaUserCircle />,
    },
    {
        title: "Skills",
        href: "skills",
        icon: <FaCode />,
    },
    {
        title: "Experience",
        href: "experience",
        icon: <FaBriefcase />,
    },
    {
        title: "Blog",
        href: "blog",
        icon: <FaRegEdit />,
    },
    {
        title: "Contact",
        href: "contact",
        icon: <FaPhone />,
    },
];

export function useResumeList( ) {
    return resumeList;
}

export function useResume( key: ResumeTitle ): Resume {

    const resume = resumeList.find( ( resume ) => resume.title === key );

    if ( !resume ) {
        throw new Error( `Resume with title "${key}" not found.` );
    }
    return resume;
}