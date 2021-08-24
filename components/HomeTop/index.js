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
                        <Image
                          src={`/${top.img}`}
                          alt='MITPBASE'
                          layout='fill'
                          objectFit='cover'
                          objectPosition='bottom center'
                          priority={true}
                          unoptimized={true}
                        />
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