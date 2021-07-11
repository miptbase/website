import React from 'react'
import style from "./feature_.module.scss"
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

import Form from '../Form'

const Feature = (props) => {
    const {title, text, img} = props;
    return (
        <div className={style.feature}>
            <div className={style.top}>
                <div className={style.img}>
                    <Image src={`/${img}`} alt={title} layout='fill' objectFit='cover' objectPosition='center'
                    />
                </div>
                <div className={style.title}>
                    {title}
                </div>
            </div>
            <div className={style.text}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} children={text} />
            </div>
        </div>
    )
}

export default Feature