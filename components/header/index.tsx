import style from "./_header.module.scss";

interface HeaderProps {
    icon: JSX.Element;
    headerText: string;
}

export default function Header( props: HeaderProps ) {
    return <header className={style.header}>{props.icon}{props.headerText}</header>;
}