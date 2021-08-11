import React from "react";
import style from "./success_.module.scss";
import Image from "next/image";
import SVG from 'react-inlinesvg';

const SuccessComponent = (props) => {
    const { content, image, share } = props;
    return (
        <section className={style.success}>
            <div className={style.part}>
                <h1 className={style.title}>{content.title}</h1>
                <div className={style.text}>{content.text}</div>
            </div>
            <div className={style.part}>
                <div className={style['background-container']}>
                    <div className={style['img-container']}>
                        <Image
                            src={`/${image.img}`}
                            alt='success'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center bottom'
                        />
                    </div>
                    <div className={style.logo}>
                        <SVG className={style['logo-img']} src={`/${image.logo}`} />
                    </div>
                    <h2 className={style['img-title']}>
                        {image.title}
                    </h2>
                </div>

                <div className={style.share}>
                    <h2 className={style['share-title']}>
                        {share.title}
                    </h2>
                    <div className={style.items}>
                        {share.items.map((item) => (
                            <a className={style['share-link']} key={item.name} href={item.link} target='_blank' rel='noopener'>
                                <SVG className={style['share-img']} src={`/${item.img}`} />
                            </a>
                        ))}
                    </div>

                </div>


            </div>
        </section>
    )
}

export default SuccessComponent