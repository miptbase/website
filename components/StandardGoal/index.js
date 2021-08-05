import React, { useCallback } from "react";
import style from "./standard-goal_.module.scss";
import Image from "next/image";
import SVG from 'react-inlinesvg';

const StandardGoal = (props) => {
    const { goal } = props;
    return (
        <section className={style['standard-goal']}>
            <div className={style.part}>
                <div className={style.logo}>
                    <SVG className={style['logo-img']} src={`/${goal.logo}`} />
                </div>
                <h2 className={style.title}>
                    {goal.title}
                </h2>
                <p className={style.text}>
                    {goal.text}
                </p>
            </div>
            <div className={style['img-container']}>
                <Image
                    src={`/${goal.image}`}
                    alt='goal'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='right center'
                />
            </div>
        </section>
    )
}

export default StandardGoal