import React from 'react'
import style from "./home-top_.module.scss"
import Button from "../ui/Button"
import { useIsMobile } from '../../hooks/useIsMobile';
import Image from 'next/image'

const HomeTop = (props) => {
    const {top, scrollToDonation} = props;
    const isMobile = useIsMobile();
    return (
        <section className={style['home-top']}>

            <div className={style.inner}>
                <div className={style['img-frame']}>
                    <Image
                        src={`/media/home-frame-2.jpg`}
                        alt='MITPBASE'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='bottom center'
                    />
                </div>

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
                <div className={style.img}>
                    <Image
                        src={`/media/home-frame-1.jpg`}
                        alt='MITPBASE'
                        layout='responsive'
                        width={1250}
                        height={369}
                    />
                </div>
                <div className={style.img_mobile}>
                    <Image
                        src={`/${top.mobileImg}`}
                        alt='MITPBASE'
                        layout='responsive'
                        width={321}
                        height={234}
                    />
                </div>
            </div>

        </section>
    )
}

export default HomeTop