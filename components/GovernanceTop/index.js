import React from "react";
import style from "./governance-top_.module.scss";

const CovernanceTop = (props) => {
    const { top } = props;
    return (
        <section className={style['governance-top']}>
            <div className={style.container}>
                <h1 className={style.title}>{top.title}</h1>
                <p className={style.text}>{top.text}</p>
                <div className={style.items}>
                    {top.items.map((item) => (
                        <div className={style.item}>
                            <div className={style['item-text']}>
                                {item.text}
                            </div>
                            {item.items &&
                                <div className={style['info-container']}>
                                    {
                                        item.items.map((item) => (
                                            <div className={style['item-info']}>
                                                {item.text}
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CovernanceTop