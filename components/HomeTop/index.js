import React from 'react'
import style from "./home-top_.module.scss"
import Button from "../ui/Button"
import { useIsMobile } from '../../hooks/useIsMobile';
import cn from "classnames";

const HomeTop = (props) => {
    const {top, scrollToDonation} = props;
    const isMobile = useIsMobile();
    return (
        <section className={style['home-top']}>

            <div className={style.inner}>
                <div className={style.content}>
                    <h1 className={style.title}>{top.title}</h1>
                    <p className={style.text}>{top.content}</p>
                    <div className={style['button-container']}>
                        <Button
                            text={isMobile ? `${top.buttonMobile}` : `${top.button}` }
                            color='orange'
                            buttonFunction={scrollToDonation}
                            width={isMobile ? '100' :''}
                        >
                        </Button>
                    </div>
                </div>


            </div>
            <div className={style['img-container']}>
                {!isMobile
                && (
                    <img src={top.img}/>
                )}
                {isMobile
                && (
                    <img src={top.mobileImg}/>
                )}
            </div>

        </section>
    )
}

export default HomeTop