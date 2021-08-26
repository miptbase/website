import React from "react";
import style from "./composition-standard_.module.scss";
import SVG from 'react-inlinesvg';

const CompositionStandard = (props) => {
    const { composition } = props;
    return (
        <section className={style['composition-standard']}>
            <h2 className={style.title}>
                {composition.title}
            </h2>
            <div className={style.items}>
                {composition.items.map((item, i) => (
                    <div className={style.item} key={i}>
                        <div className={style['item-header']}>
                            <div className={style['item-titles']}>
                                <div className={style['item-title']}>
                                    {item.title}
                                </div>
                                <div className={style['item-subtitle']}>
                                    {item.subtitle}
                                </div>
                            </div>
                            <div className={style['item-icon']}>
                                <SVG className={style['item-img']} src={`/${item.image}`} />
                            </div>
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

export default CompositionStandard