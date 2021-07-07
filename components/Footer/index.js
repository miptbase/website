import React from 'react'
import style from "./footer_.module.scss"
import Button from "../ui/Button";
import Menu from "../Menu";
import SVG from 'react-inlinesvg';
import Feedback from "../Feedback";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import { useIsMobile } from '../../hooks/useIsMobile';

const Footer = (props) => {
    const {footer, menu, feedback} = props;
    const isMobile = useIsMobile();
    return (
        <section className={style.footer}>
            <div className={style.inner}>
                <Feedback feedback={feedback}/>
                <div className={style.main}>
                    <a href="/" className={style.logo}>
                        <img src={footer.logo} alt='logo' />
                    </a>
                    <div className={style.menu}>
                        <Menu menu={menu} />
                    </div>
                    <div className={style.social}>
                        {footer.social.map((item) => (
                            <div
                                className={style['social-item']}
                                key={item.img}
                            >
                                <a href={item.link} target='_blank' rel='noopener'>
                                    <SVG className={style['social-img']} src={item.img} />
                                </a>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.info}>
                    <div className={style['info-description']}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={footer.copy.text} />
                    </div>
                    <div className={style['info-button']}>
                        <SVG className={style['info-icon']} src='media/info-footer.svg' />
                        <div className={style['info-text']}>Powered by Vercel</div>
                    </div>
                    <div className={style.copy}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={footer.copy.copy} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer