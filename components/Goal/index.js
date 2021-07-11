import React from 'react'
import style from "./goal_.module.scss"
import Button from "../ui/Button";
import { useIsMobile } from '../../hooks/useIsMobile';


const Goal = (props) => {
    const isMobile = useIsMobile();
    const {goal, stats, scrollToDonation} = props;
    const target = stats
        .filter(item => item.Key === "Current target")[0].Value
        .replace(/[\s.,%]/g, '');
    const targetValue = Math.round((Number(target)) / 1000000);
    const percent = stats
        .filter(item => item.Key === "Target progress")[0].Value
        .replace(/[\s.,%]/g, '');
    return (
        <section className={style.goal}>
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>
                        {goal.title}
                    </h2>
                    <p className={style.text}>
                        {goal.text}
                    </p>
                    <Button
                        text={isMobile ? `${goal.buttonMobile}` : `${goal.button}` }
                        color= 'orange'
                        buttonFunction={scrollToDonation}
                        width={isMobile ? '100' :''}
                    />
                </div>
                <div className={style.progress}>
                    <div className={style['progress-circle']} />
                    <div className={style.info}>
                        <div className={style.percent}>{`${percent}%`} </div>
                        <div className={style['info-text']}>
                            {goal.caption} <br />
                            {`в ${targetValue} млн ₽`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Goal