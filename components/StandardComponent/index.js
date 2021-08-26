import React from "react";
import style from "./standard_.module.scss";

const StandardGoal = (props) => {
    const { standard } = props;
    return (
        <section className={style.standard}>
            <div className={style.container}>
                <h1 className={style.title}>{standard.title}</h1>
                <div className={style.items}>
                    {standard.items.map((item) => (
                        <div className={style.item} key={item.name}>
                            <div className={style['item-name']}>
                                {item.name}
                            </div>
                            <div className={style['item-text']}>
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StandardGoal