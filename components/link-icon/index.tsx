import { BiLogoGithub } from "react-icons/bi";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";
import { SiTistory } from "react-icons/si";

const ICON_MAP = {
    github: <BiLogoGithub size={24} />,
    blog: <SiTistory size={20} />,
    resume: <BsFillFileEarmarkPersonFill size={24} />,
};

export declare type IconName = keyof typeof ICON_MAP;

interface IconProps {
    name: IconName;
    size?: number;
}

export const isValidIcon = ( name: string ): name is IconName => {
    return name in ICON_MAP;
};

export default function LinkIcon( props: IconProps ) {

    const { name } = props;

    return ICON_MAP[name] ?? null;
}