import React, {useState} from 'react'
import style from "./feedback_.module.scss"
import Input from "../ui/Input";
import Button from "../ui/Button";

const Feedback = (props) => {
    const {feedback} = props;
    const [feedbackPlaceholder, setFeedbackPlaceholder] = useState(feedback.placeholder);
    return (
        <section className={style.feedback}>
            <div className={style.inner}>
                <h2 className={style.title}>
                    {feedback.text}
                </h2>
                <form className={style.form}>
                    <div className={style.input}>
                        <Input
                            placeholder={feedbackPlaceholder}
                            color='white'
                            onFocus={() => {
                                setFeedbackPlaceholder('')
                            }}
                            onBlur={(e) => {
                                if ((e.target.value) !== '') {
                                    setFeedbackPlaceholder('')
                                } else {
                                    setFeedbackPlaceholder(feedback.placeholder)
                                }
                            }}
                        />
                    </div>
                    <div className={style.button}>
                        <Button
                            text={feedback.button}
                            color= 'blue'
                            width="100"
                        />
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Feedback