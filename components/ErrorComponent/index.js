import React, { useCallback } from "react";
import style from "./error_.module.scss";
import Image from "next/image";
import rehypeRaw from 'rehype-raw'
import SVG from 'react-inlinesvg';
import Button from "../ui/Button";
import ReactMarkdown from "react-markdown";

const ErrorComponent = (props) => {
    const { content, image, scrollToDonation } = props;
    return (
        <section className={style.error}>
            <div className={style.container}>
                <div>
                    <h1 className={style.title}>{content.title}</h1>
                    <div className={style.text}>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content.text} />
                    </div>
                    <div className={style['button-container']}>
                        <Button
                            color='orange'
                            text={content.buttonPayText}
                            width="100"
                            buttonFunction={scrollToDonation}
                        />
                        <Button
                            color='white'
                            text={content.buttonSupportText}
                            width="100"
                        />
                    </div>
                </div>
                <div className={style['img-container']}>
                    <div className={style.img}>
                        <Image
                            src={`/${image.img}`}
                            alt='error'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ErrorComponent