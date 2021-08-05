import React from "react";
import style from "./standard-distribution_.module.scss";

const StandardDistribution = (props) => {
    const { distribution } = props;
    return (
        <section className={style.distribution}>
            <h1 className={style.title}>{distribution.title}</h1>
            <div className={style.items}>
                {distribution.items.map((item, i) => (
                    <div className={style.item} key={i}>
                        <div className={style['item-number']}>
                            {i+1}
                        </div>
                        <div className={style['item-name']}>
                            {item.title}
                        </div>
                        <div className={style['item-text']}>
                            {item.text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StandardDistribution