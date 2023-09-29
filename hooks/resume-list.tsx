import { FaUserCircle, FaCode, FaBriefcase, FaRegEdit, FaGraduationCap } from "react-icons/fa";

export declare type ResumeKey = "About Me" | "Skills" | "Experience" | "Education" | "Blog";

export interface Resume {
    id: ResumeKey;
    href: string;
    icon: JSX.Element;
}

export const resumeList: Resume[] = [
    {
        id: "About Me",
        href: "about",
        icon: <FaUserCircle />,
    },
    {
        id: "Skills",
        href: "skills",
        icon: <FaCode />,
    },
    {
        id: "Experience",
        href: "experience",
        icon: <FaBriefcase />,
    },
    {
        id: "Education",
        href: "education",
        icon: <FaGraduationCap />,
    },
    {
        id: "Blog",
        href: "blog",
        icon: <FaRegEdit />,
    },
];

export function useResumeList( ) {
    return resumeList;
}

export function useResume( key: ResumeKey ): Resume {

    const resume = resumeList.find( ( resume ) => resume.id === key );

    if ( !resume ) {
        throw new Error( `Resume with title "${key}" not found.` );
    }
    return resume;
}