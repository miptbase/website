import React from "react";
import style from "./governance-top_.module.scss";
import {useIsMobile} from "../../hooks/useIsMobile";

const CovernanceTop = (props) => {
    const { top } = props;
  const isMobile = useIsMobile();
    return (
        <section className={style['governance-top']}>
            <div className={style.container}>
                <h1 className={style.title}>{top.title}</h1>
                <p className={style.text}>{top.text}</p>
                <div className={style.items}>
                  { !isMobile && (
                    <>
                      {top.items.map((item, i) => (
                        <div className={style.item} key={i}>
                          <div className={style['item-text']}>
                            {item.text}
                          </div>
                          {item.items &&
                          <div className={style['info-container']}>
                            {
                              item.items.map((item, i) => (
                                <div key={i} className={style['item-info']}>
                                  {item.text}
                                </div>
                              ))
                            }
                          </div>
                          }
                        </div>
                      ))}
                    </>
                  )
                }
                  { isMobile && (
                    <>
                      {top.itemsMobile.map((item, i) => (
                        <div className={style.item} key={i}>
                          <div className={style['item-text']}>
                            {item.title}
                          </div>
                          {item.text &&
                            <div className={style['item-info']}>
                              {item.text}
                            </div>
                          }
                        </div>
                      ))}
                    </>
                  )
                  }

                </div>
            </div>
        </section>
    )
}

export default CovernanceTop