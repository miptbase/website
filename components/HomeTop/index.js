import React from 'react'
import style from "./home-top_.module.scss"
import Button from "../ui/Button"

const HomeTop = (props) => {
    const {title, content, img} = props;
    return (
        <section className={style['home-top']}>
            <div className={style['content']}>
                <h1 className={style['title']}>{title}</h1>
                <p className={style['text']}>{content}</p>
                <div className={style['button-container']}>
                    <Button
                        text='Поддержать проект'
                        color='blue'
                    >
                    </Button>
                </div>
            </div>
            <div className={style['img-container']}>
                <img src={img}/>
            </div>
        </section>
    )
}

export default HomeTop