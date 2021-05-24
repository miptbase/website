import React from 'react'
import style from "./features_.module.scss"

import Feature from '../Feature'

const Features = (props) => {
    const {features} = props;
    return (
        <div className={style.features}>
            <h2 className={style.title}>
                {features.title}
            </h2>
            <div className={style.content}>
                {features.items.map((feature) => (
                    <Feature
                        key={feature.name}
                        title={feature.name}
                        text={feature.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Features