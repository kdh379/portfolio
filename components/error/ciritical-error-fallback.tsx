import { BiSolidError } from "react-icons/bi";

import style from "./_critical-error.module.scss";

import data from "data/profile.json";

export default function CriticalErrorFallback() {
    return <div className={style["critical-error"]}>
        <BiSolidError />
        <h1>이개웨않됌?</h1>
        <p>{data.email} 으로 확인좀 해보라고 알려주세요</p>
    </div>;
}