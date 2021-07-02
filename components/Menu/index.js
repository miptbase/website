import React from 'react'
import style from "./menu_.module.scss"

const Menu = (props) => {
    const {menu} = props;
    return (
        <nav className={style.menu}>
            {menu.items.map((item) => (
                <div
                    className={style.item}
                    key={item.item}
                >
                    <a href={item.link} className={style.link}>{item.item}</a>
                </div>
            ))}
        </nav>
    )
}

export default Menu