import React from 'react'
import style from "./home-top_.module.scss"

import Image from 'next/image'
import Button from "../ui/Button";


const HomeTop = (props) => {
    const {title, content} = props;
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
                {/*<Image*/}
                {/*    src='/img/home-top.jpg'*/}
                {/*    alt="MIPT"*/}
                {/*    layout='fill'*/}
                {/*    priority='true'*/}
                {/*    objectFit='cover'*/}
                {/*    objectPosition='center'*/}
                {/*/>*/}
            </div>
        </section>
    )
}

export default HomeTop