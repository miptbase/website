import React from 'react';
import style from "./donor-details.module.css";
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'

const DonorDetails = (props) => {
    const {donor, company, text} = props;
    return (
            <div
                className={style['donor-details']}
            >
                <div className={style.name}>
                    {donor}
                </div>
                <div className={style.company}>
                    {company}
                </div>
                <div className={style.text}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{text}</ReactMarkdown>
                </div>
            </div>
    );
}

export default DonorDetails;