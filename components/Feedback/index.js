import React from 'react'
import style from "./feedback_.module.scss"

import Feature from '../Feature'
import Input from "../ui/Input";
import Button from "../ui/Button";

const Feedback = (props) => {
    const {feedback} = props;
    return (
        <section className={style.feedback}>
            <div className={style.inner}>
                <h2 className={style.title}>
                    {feedback.title}
                </h2>
                <form className={style.form}>
                    <div className={style.input}>
                        <Input
                            placeholder={feedback.placeholder}
                        />
                    </div>
                    <div className={style.button}>
                        <Button
                            text={feedback.button}
                            color= 'blue'
                        />
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Feedback