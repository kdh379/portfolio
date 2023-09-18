import { FaUserCircle, FaCode, FaBriefcase, FaFolder, FaRegEdit, FaPhone } from "react-icons/fa";

export declare type ResumeTitle = "About Me" | "Skills" | "Career" | "Projects" | "Post" | "Contact";

interface Resume<T_Title> {
    title: T_Title;
    href: string;
    icon: JSX.Element;
}

export const resumeList: Resume<ResumeTitle>[] = [
    {
        title: "About Me",
        href: "#about",
        icon: <FaUserCircle />,
    },
    {
        title: "Skills",
        href: "#skills",
        icon: <FaCode />,
    },
    {
        title: "Career",
        href: "#career",
        icon: <FaBriefcase />,
    },
    {
        title: "Projects",
        href: "#projects",
        icon: <FaFolder />,
    },
    {
        title: "Post",
        href: "#post",
        icon: <FaRegEdit />,
    },
    {
        title: "Contact",
        href: "#contact",
        icon: <FaPhone />,
    },
];

export function useResumeList( ) {
    return resumeList;
}

export function useResume( key: ResumeTitle ): Resume<ResumeTitle> {

    const resume = resumeList.find( ( resume ) => resume.title === key );

    if ( !resume ) {
        throw new Error( `Resume with title "${key}" not found.` );
    }
    return resume;
}