import style from "./_title.module.scss";

interface TitleProps {
    icon: JSX.Element;
    headerText: string;
}

export default function Title( props: TitleProps ) {
    return <h1 className={style.title}>{props.icon}{props.headerText}</h1>;
}