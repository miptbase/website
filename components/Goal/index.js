import React, { useState, useRef, useEffect } from 'react'
import style from "./goal_.module.scss"
import Button from "../ui/Button";
import { useIsMobile } from '../../hooks/useIsMobile';


const Goal = (props) => {
    const isMobile = useIsMobile();
    const [chartVisible, setChartVisible] = useState(false);
    const [circumference, setCircumference] = useState(0);
    const chartRef = useRef();
    const scrollHandler = _ => {
        if (chartRef.current) {
            if (chartRef.current.getBoundingClientRect().bottom <= window.innerHeight) {
                setChartVisible(true);
            }
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, []);
    useEffect(() => {
        if (isMobile) {
            setCircumference(70 * (3.125* window.innerWidth/100) )
        } else {
            setCircumference(90.9 * (0.78125  * window.innerWidth/100) )
        }
    }, [isMobile]);
    const {goal, stats, scrollToDonation} = props;
    const target = stats
        .filter(item => item.Key === "Current target")[0].Value
        .replace(/[\s.,%]/g, '');
    const targetValue = Math.round((Number(target)) / 1000000);
    const percent = Number(stats
        .filter(item => item.Key === "Target progress")[0].Value
        .replace(/[\s.,%]/g, ''));
    console.log('circumference', circumference);
    const chartLine = String(circumference - circumference * percent / 100)
    console.log(typeof chartLine)
    return (
        <section className={style.goal} >
            <div className={style.container}>
                <div className={style.content}>
                    <h2 className={style.title}>
                        {goal.title}
                    </h2>
                    <p className={style.text}>
                        {goal.text}
                    </p>
                    <Button
                        text={isMobile ? `${goal.buttonMobile}` : `${goal.button}` }
                        color= 'orange'
                        buttonFunction={scrollToDonation}
                        width={isMobile ? '100' :''}
                    />
                </div>

                    <div className={style.progress} ref={chartRef}>
                        {chartVisible &&
                    <div className={style['chart-container']}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            className={style.chart}
                        >
                            <circle
                                cx="40"
                                cy="40"
                                r="28"
                                fill="none"
                                stroke="rgba(216,216,216,0.1)"
                                strokeWidth="8"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="28"
                                fill="none"
                                stroke="white"
                                strokeLinecap="butt"
                                strokeWidth="8"
                                id='spinner-line'
                                strokeDasharray={circumference}
                                strokeDashoffset={chartLine}

                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    from={circumference}
                                    to={chartLine}
                                    dur="1s"
                                    fill="freeze"
                                    keyTimes="0; 1"
                                    keySplines="0.64, 0, 0.78, 0;"
                                    begin="0.5s"
                                />
                            </circle>
                        </svg>
                    </div>
                        }

                    <div className={style.info}>
                        <div className={style.percent}>{`${percent}%`} </div>
                        <div className={style['info-text']}>
                            {goal.caption} <br />
                            {`в ${targetValue} млн ₽`}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Goal