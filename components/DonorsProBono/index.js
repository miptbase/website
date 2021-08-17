import React from "react";
import style from "./donors-pro-bono_.module.scss";
import SVG from 'react-inlinesvg';
const DonorsProBono = (props) => {
    const { proBono } = props;
    return (
        <section className={style['donors-pro-bono']}>
            <h2 className={style.title}>{proBono.title}</h2>
            <div className={style.items}>
                {proBono.items.map((item, i) => (
                    <div className={style.item} key={i}>
                        <a href={item.link} className={style['img-container']}>
                            <div className={style.img}>
                                <SVG className={style['item-img']} src={`/${item.image}`} />
                            </div>
                        </a>
                        <div className={style.text}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DonorsProBono