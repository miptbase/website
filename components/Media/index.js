import React from 'react'
import style from "./media_.module.scss"

import Feature from '../Feature'

const Media = (props) => {
    const {media} = props;
    return (
        <section className={style.media}>
            <h2 className={style.title}>
                {media.title}
            </h2>
            <div className={style.items}>
                {media.items.map((item, index) => (
                    <div
                        className={style.item}
                        key={index}
                    >
                        <p className={style.text}>
                            {item.text}
                        </p>
                        <div className={style.img}>
                            <img src={item.img} alt={item.alt}/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Media