import React from "react";
import style from "./faq-component_.module.scss";

const FaqComponent = (props) => {
    const { faq } = props;
    return (
        <section className={style['faq-component']}>
            <h1 className={style.title}>{faq.title}</h1>
            <div className={style.inner}>
                <div className={style.items}>
                    {faq.items.map((item, i) => (
                        <div className={style.item} key={i} id={`faq_${i + 1}`}>
                            <div className={style['item-title']}>
                                {item.title}
                            </div>
                            <div className={style['item-text']}>
                                {item.text}
                            </div>
                        </div>
                    ))}

                </div>
            <div className={style.contents}>
                <div>
                    {faq.items.map((item, i) => (
                        <div className={style['link-container']} key={i}>
                            <a className={style['content-link']} href={`#faq_${i + 1}`}>
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            </div>


        </section>
    )
}

export default FaqComponent