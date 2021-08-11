import React from "react";
import style from "./donors-quote_.module.scss";
import Image from "next/image";

const DonorsQuote = (props) => {
    const { quote } = props;
    return (
        <section className={style['donors-quote']}>
            <div className={style.container}>
                <div className={style.items}>
                    {quote.items.map((item) => (
                        <div className={style.item} key={item.name}>
                            <p className={style.text}>{item.text}</p>
                            <div className={style.bottom}>
                                <div className={style.img}>
                                    <Image
                                        src={`/${item.image}`}
                                        alt='donor'
                                        layout='fill'
                                        objectFit='cover'
                                        objectPosition='center bottom'
                                    />
                                </div>
                                <div className={style.content}>
                                    <div className={style.name}>
                                        {item.name}
                                    </div>
                                    <div className={style.info}>
                                        {item.info}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DonorsQuote