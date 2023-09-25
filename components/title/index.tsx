import style from "./_header.module.scss";

interface TitleProps {
    icon: JSX.Element;
    headerText: string;
}

export default function Title( props: TitleProps ) {
    return <h1 className={style.header}>{props.icon}{props.headerText}</h1>;
}