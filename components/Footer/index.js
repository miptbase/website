import React from 'react'
import style from "./footer_.module.scss"
import Menu from "../Menu";
import SVG from 'react-inlinesvg';
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { useIsMobile } from '../../hooks/useIsMobile';
import Link from "next/link";

const Footer = (props) => {
    const {footer, menu, feedback} = props;
    const isMobile = useIsMobile();
    return (
        <section className={style.footer}>
            <div className={style.inner}>
                {/*<Feedback feedback={feedback}/>*/}
                <div className={style.main}>
                    <div className={style.logo}>
                        <Link href="/">
                            <a>
                                <SVG className={style['logo-img']} src={`/${footer.logo}`} />
                            </a>
                        </Link>
                    </div>
                    {!isMobile
                    && (
                        <>
                            <div className={style.menu}>
                                <Menu menu={menu} />
                            </div>
                            <div className={style.social}>
                                {footer.social.map((item) => (
                                    <div
                                        className={style['social-item']}
                                        key={item.img}
                                    >
                                        <a className={style.link} href={item.link} target='_blank' rel='noopener'>
                                            <SVG className={style['social-img']} src={item.img} />
                                        </a>

                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    {isMobile
                    && (
                        <>
                            <div className={style.links}>
                                {footer.social.map((item) => (
                                        <a className={style['social-link']}     key={item.name} href={item.link} target='_blank' rel='noopener'>
                                            {item.name}
                                        </a>
                                ))}
                                <a className={style['social-link']} href='mailto:fund@phystech.edu' target='_blank' rel='noopener'>
                                    Mail us
                                </a>
                            </div>
                        </>
                    )}


                </div>
                <div className={style.info}>
                    <div className={style['info-description']}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={footer.copy.text} />
                    </div>
                    <a className={style['info-button']} href='https://vercel.com/?utm_source=miptbaseorg&utm_campaign=oss' target='_blank' rel='noopener'>
                        <SVG className={style['info-icon']} src='media/info-footer.svg' />
                        <div className={style['info-text']}>Powered by Vercel</div>
                    </a>

                    <div className={style.copy}>
                        {!isMobile
                        && (
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={footer.copy.copy} />
                        )}
                        {isMobile
                        && (
                            <ReactMarkdown rehypePlugins={[rehypeRaw]} children={footer.copy.copy_mobile} />
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer