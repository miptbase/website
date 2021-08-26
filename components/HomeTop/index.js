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
                <div className={style['img-container']}>
                    <div className={style.img}>
                        <div className={style.slot}>
                            <img srcSet="
                                   /media/home-top-image-800.jpg 800w,
                                   /media/home-top-image-1024.jpg 1024w,
                                   /media/home-top-image-1280.jpg 1280w,
                                   /media/home-top-image-1600.jpg 1600w,
                                   /media/home-top-image-1920.jpg 1920w,
                                   /media/home-top-image-3840.jpg 3840w,
                                    "
                                 sizes="(max-width: 800px) 400px,
                                    (max-width: 1024px) 512px,
                                     (max-width: 1600px) 800px,
                                      (max-width: 1920px) 960px,
                                    3840px"
                                 src="/media/home-top-image-1024.jpg" alt="MITPBASE" loading="lazy"/>
                        </div>
                    </div>
                    <div className={style.img_mobile}>
                        <Image
                          src={`/${top.mobileImg}`}
                          alt='MITPBASE'
                          layout='fill'
                          objectFit='cover'
                          objectPosition='center bottom'
                        />
                    </div>
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


        </section>
    )
}

export default HomeTop