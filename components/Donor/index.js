import React from 'react'
import style from "./donor_.module.scss"


const Donor = (props) => {
    const {name, description, img, company} = props;
    return (
        <div className={style.donor}>
            <div className={style.flipper}>
                <div className={style.front}>
                    <div className={style.img}>
                        <img src={img} alt={name}/>
                    </div>
                    <p className={style.name}>{name}</p>
                    <p className={style.company}>{company}</p>
                </div>
                <div className={style.back}>
                    <p className={style['back-name']}>{name}</p>
                    <p className={style['back-company']}>{company}</p>
                    <p className={style['back-description']}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Donor