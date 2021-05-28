import React from 'react'
import style from "./goal_.module.scss"
import Button from "../ui/Button";


const Goal = (props) => {
    const {goal} = props;
    const percent = 25;
    return (
        <section className={style.goal}>
            <div className={style.content}>
                <h2 className={style.title}>
                    {goal.title}
                </h2>
                <p className={style.text}>
                    {goal.text}
                </p>
                <div className={style.progress}>
                    <div className={style['progress-line']} />
                </div>
                <div className={style['progress-summ']}>
                    {goal.progress} ₽ ({percent}%)
                </div>
                <div className={style.total}>
                    {goal.caption} {goal.total} ₽
                </div>
                <Button
                    text={goal.buttonText}
                    color= 'orange'
                />
            </div>
            <div className={style.image}>
                <img src={goal.img}/>
            </div>
        </section>
    )
}

export default Goal