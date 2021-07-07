import React, {useEffect, useRef, useState, useCallback} from 'react'
import ReactDOM from 'react-dom';
import style from './form_.module.scss'
import Input from '../ui/Input'
import Check from '../ui/Check'
import Button from '../ui/Button'
import Value from '../ui/Value'
import Select, { components }from 'react-select'
import cn from 'classnames'
import {IPSTACK_API_KEY} from '../../config';
import Menu from "../Menu";
import {useIsMobile} from "../../hooks/useIsMobile";


const Form = (props) => {
    const isMobile = useIsMobile();
    const nameInputRef = useRef(null);
    const emailInputRef = useRef(null);

    const formTransfer = [
        {
            id: 1,
            placeholder: {
                name: 'Ваше имя',
                value: 'Петр Капица'
            },
            name: 'name',
            ref: nameInputRef,
        },
        {
            id: 2,
            placeholder: {
                name: 'Ваш email',
                value: 'landau@phystech.edu'
            },
            name: 'email',
            ref: emailInputRef,
        }
    ]
    const studenttransfer = [
        {
            id: 1,
            placeholder: 'Факультет',
            name: 'faculty',
        },
        {
            id: 2,
            placeholder: 'Год окончания',
            name: 'graduate-year',
        }
    ]
    const { form } = props;
    const [isStudent, setIsStudent] = useState(false);
    const [activeValue, setActiveValue] = useState('2');
    const [activeMethod, setActiveMethod] = useState('Карта');
    const [selectedValue, setSelectedValue] = useState('40000');
    const [currentEmail, setCurrentEmail] = useState(null);
    const [currentName, setCurrentName] = useState(null);
    const [otherPlaceholder, setOtherPlaceholder] = useState('Другая сумма');
    const [namePlaceholder, setNamePlaceholder] = useState(formTransfer[0].placeholder);
    const [emailPlaceholder, setEmailPlaceholder] = useState(formTransfer[1].placeholder);
    const [nameMobilePlaceholder, setNameMobilePlaceholder] = useState(formTransfer[0].placeholder.name);
    const [emailMobilePlaceholder, setEmailMobilePlaceholder] = useState(formTransfer[1].placeholder.name);
    const [yearPlaceholder, setYearPlaceholder] = useState(studenttransfer[1].placeholder);
    const [selectDepartmentActive, setSelectDepartmentActive] = useState(false);
    const selectMethod = method => {
        setActiveMethod(method);
    };

    useEffect(() => {
        if (currentName) {
            setNamePlaceholder({name: '', value: ''})
        }
        if (currentEmail) {
            setEmailPlaceholder({name: '', value: ''})
        }
    }, [currentName, currentEmail]);


    const departments = [
        {
            value: 'ФРТК', label: 'ФРТК'
        },
        {
            value: 'РТФ', label: 'РТФ'
        },
        {
            value: 'ФОПФ, РФФ', label: 'ФОПФ, РФФ'
        },
        {
            value: 'ФАКИ, АМФ', label: 'ФАКИ, АМФ'
        },
        {
            value: 'ФМБФ, ФМХФ, ФХФ', label: 'ФМБФ, ФМХФ, ФХФ'
        },
        {
            value: 'ФФКЭ', label: 'ФФКЭ'
        },
        {
            value: 'ФАЛТ', label: 'ФАЛТ'
        },
        {
            value: 'ФУПМ, ФПМЭ', label: 'ФУПМ, ФПМЭ'
        },
        {
            value: 'ФПФЭ', label: 'ФПФЭ'
        },
        {
            value: 'ФИВТ', label: 'ФИВТ'
        },
        {
            value: 'ФФХБ', label: 'ФФХБ'
        },{
            value: 'ФНБИК', label: 'ФНБИК'
        },{
            value: 'ФБМФ', label: 'ФБМФ'
        },{
            value: 'ФИБС', label: 'ФИБС'
        }
    ]

    const paymentMethod = [
        {id: 1, name: 'Карта', icon: "🇷🇺"},
        {id: 2, name: 'Перевод'},
        {id: 3, name: 'PayPal', icon: "🌎"},
    ]

    const paymentValue = [
        {
            id: 1,
            value: '5000',
            tooltip: 'test test'
        },
        {
            id: 2,
            value: '40 000',
            tooltip: 'Этого хватит на месяц интернета для целой группы студентов'
        },
        {
            id: 3,
            value: '100 000',
            tooltip: 'test test test '
        },
    ]
    const DropdownIndicator = (
        props
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <svg style={selectDepartmentActive? {
                    width: '1.5rem',
                    height: '0.9rem',
                    marginRight: '-8px',
                    transform: 'rotate(180deg)',
                    transformOrigin: 'center',
                    transition: '0.3s transform ease-in-out'}
                    : {
                        width: '1.5rem',
                        height: '0.9rem',
                        marginRight: '-8px',
                        transform: 'rotate(0)',
                        transformOrigin: 'center',
                        transition: '0.3s transform ease-in-out'
                }
                    }
                     xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="9"
                    fill="none"
                    viewBox="0 0 15 9"
                >
                    <path
                        fill="#fff"
                        d="M7.549 7.776l-.354.354.354.353.353-.353-.353-.354zM.494 1.43l6.701 6.7.707-.706-6.7-6.701-.708.707zm7.409 6.7l6.7-6.7-.707-.707-6.7 6.7.707.708z"
                    />
                </svg>
            </components.DropdownIndicator>
        );
    };
    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: '100%',
            color: "white",
            height: '4.4rem',
            borderRadius: '0.5rem',
            background: 'transparent',
            padding: '0 1.5rem',
            fontSize: '1.6rem',
            fontWeight: 'normal',
            boxShadow: '0 0 0 1px white inset',
            transition: '0.3s box-shadow ease-in-out',
            display: 'flex',
            cursor: 'pointer',
            '&:hover': {
                boxShadow: '0 0 0 2px white inset'
            }
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            padding: '0',

        }),
        menuList: (provided, state) => ({
            ...provided,
            maxHeight: 'none',
            padding: '0.5rem 1rem',
            background: 'white'

        }),
        option: (provided, state) => ({
            ...provided,
            color: '#2D83E8',
            padding: '1rem 0',
            borderBottom: '1px solid #2D83E8',
            fontSize: '1.6rem',
            lineHeight: '130%',
            cursor: 'pointer',
            background: 'white',
            '&:active': {
                background: 'white',
            },
            '&:last-child': {
                borderBottom: 'none',
            }

        }),
        placeholder: (provided, state) => ({
            ...provided,
            color: 'white',
            margin: '0'
        }),
        menu: (provided, state) => ({
            ...provided,
            width: '100%',
            height: 'auto',
            borderBottom: '1px dotted pink',
            color: "white",
            left: '0',
            zIndex: '3'
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
        IndicatorsContainer: (provided, state) => ({
            ...provided,
            padding: '0'
        }),

        control: (provided, state) => ({
            ...provided,
            width: '100%',
            color: "white",
            height: '4.4rem',
            background: 'transparent',
            fontSize: '1.6rem',
            fontWeight: 'normal',
            display: 'flex',
            padding: '0',
            border: 'none',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: 'none'
        }),

        singleValue: (provided, state) => ({
            ...provided,
            color: "white"
        }),
    }

    const [payPalButton, setPayPalButton] = useState(null);
    const [showPayPalButton, setShowPayPalButton] = useState(false);
    const createPayPalOrder = (data, actions) => {
      const {paymentId, value} = JSON.parse(localStorage.getItem('paymentData'));
      return actions.order.create({
        id: paymentId,
        purchase_units: [
          {
            amount: {
              value: value.replace(/ /, ''),
            },
          },
        ],
      });
    };
    useEffect(async () => {
      document.getElementById('paypal-sdk').addEventListener('load', () => {
        const payPalButton = React.createElement(
          paypal.Buttons.driver("react", { React, ReactDOM }),
          {createOrder: createPayPalOrder},
        );
        setPayPalButton(payPalButton);
      })
      const response = await (
        await fetch(`http://api.ipstack.com/check?access_key=${IPSTACK_API_KEY}`)
      ).json();
      if (response.country_code !== 'RU') {
        console.log('not ru');
      }
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const {result, id: paymentId} = await (await fetch('https://api.miptbase.org/id')).json();
        if (result === 'success') {
            localStorage.setItem('paymentData', JSON.stringify({
                paymentId,
                name: formData.get('name'),
                email: formData.get('email'),
                value: selectedValue,
            }));

            if (activeMethod === 'Перевод') {
                openTransfer();
            }

            if (activeMethod === 'Карта') {
                handlerClick();
            }

            if (activeMethod === 'PayPal') {
              setShowPayPalButton(true);
            }
        } else {
            console.log('error occured');
        }
    };

    const openTransfer = () => {
        window.open('/transfer');
    }

    const paymentSumm = Number(selectedValue.replace(/ +/g, '').trim());

    const hiddenForm = `      <form style="visibility: hidden; height: 0;" id='payForm' name="TinkoffPayForm" class="form" onsubmit="pay(this); return false;">
                    <div class="form__title"> Улучшим вместе жизнь студентов Физтеха!</div>
                <input class="tinkoffPayRow" type="hidden" name="terminalkey" value="1611313361029DEMO"/>
                    <input class="tinkoffPayRow" type="hidden" name="frame" value="false" />
                        <input class="tinkoffPayRow" type="hidden" name="language" value="ru" />
                            <input class="tinkoffPayRow" type="text" name="amount" value=${paymentSumm}
                                   required />
                               
                                 
                                        <input class="tinkoffPayRow" type="text" placeholder="ФИО плательщика"
                                               name="name" value=${currentName} />
                                            <input class="tinkoffPayRow" type="text" placeholder="E-mail"
                                                   name="email"  value=${currentEmail} />
                                              
                                                    <input id='submitButton' class="tinkoffPayRow" type="submit" value="Оплатить" />
            </form>
            
                     <script type="text/javascript">
    const terminalkey = document.forms.TinkoffPayForm.terminalkey
    const widgetParameters = {
        container: 'tinkoffWidgetContainer',
        terminalKey: terminalkey.value,
        paymentSystems: {
            GooglePay: {
                environment: "TEST",
                merchantId: "12345678901234567890",
                buttonColor: "black",
                buttonType: "short",
                paymentInfo: function () {
                    return {
                        infoEmail: "E-mail для отправки информации о платеже",
                        paymentData: document.forms.TinkoffPayForm
                    }
                }
            }

        },
    };
    window.addEventListener('load', function () {
        initPayments(widgetParameters);
    });

</script>`

    function createHiddenForm() {
        return {__html: hiddenForm};
    }

    function CreatedForm() {
        return <div dangerouslySetInnerHTML={createHiddenForm()} />;
    }

    let submitButton;

    useEffect(() => {
        submitButton = document.getElementById('submitButton');
    });

    const handlerClick = () => {
        submitButton.click()
    }

    const payButtons = showPayPalButton
      ? payPalButton
      : <>
          <div className={cn({
              [style['pay-button']]: true,
              [style['pay-button_no_active']]: true,
          })} id="tinkoffWidgetContainer"   />
          <div className={cn({
              [style['pay-button-main']]: true,
              [style['pay-button-main_100']]: true,
          })}>
              <Button
                  placeholder='Поддержать'
                  color='orange'
                  type='submit'
                  text='Поддержать'
                  width="100"
              />
          </div>
        </>;
    return (
        <>
            <CreatedForm />


            <form onSubmit={onSubmit} className={style.form}>
                {!isMobile
                && (
                    <>
                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{namePlaceholder.name} </span> <span className={style['placeholder-value']}>{namePlaceholder.value}</span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentName(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setNamePlaceholder({name: '', value: ''})
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setNamePlaceholder({name: '', value: ''})
                                    } else {
                                        setNamePlaceholder(formTransfer[0].placeholder)
                                    }
                                }}
                            />
                        </div>

                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{emailPlaceholder.name} </span> <span className={style['placeholder-value']}>{emailPlaceholder.value}</span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentEmail(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setEmailPlaceholder({name: '', value: ''})
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setEmailPlaceholder({name: '', value: ''})
                                    } else {
                                        setEmailPlaceholder(formTransfer[1].placeholder)
                                    }
                                }}
                            />
                        </div>
                    </>
                )}
                {isMobile
                && (
                    <>
                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{nameMobilePlaceholder} </span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentName(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setNameMobilePlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setNameMobilePlaceholder('')
                                    } else {
                                        setNameMobilePlaceholder(formTransfer[0].placeholder.name)
                                    }
                                }}
                            />
                        </div>

                        <div className={style.input}>
                            <div className={style.placeholder}>
                                <span className={style['placeholder-text']}>{emailMobilePlaceholder} </span>
                            </div>
                            <Input
                                color='white'
                                name={'name'}
                                ref={nameInputRef}
                                onInput=  {(e)=> {
                                    setCurrentEmail(e.target.value)
                                }
                                }
                                onFocus={() => {
                                    setEmailMobilePlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setEmailMobilePlaceholder('')
                                    } else {
                                        setEmailMobilePlaceholder(formTransfer[1].placeholder.name)
                                    }
                                }}
                            />
                        </div>
                    </>
                )}


                <div className={style.hidden}>
                    <div className={style.check}>
                        <Check
                            color='white'
                            text='Я учился/учусь в МФТИ'
                            id='isStudent'
                            checkChild={true}
                            functionCheck={()=> setIsStudent(!isStudent)}
                            name='member'
                        >
                        </Check>
                    </div>

                    <div className={cn({
                        [style.student]: true,
                        [style.student_active]: isStudent,
                        [style.student_select_active]: selectDepartmentActive
                    })}>

                        <div className={style.input}>
                            <Select options={departments}
                                    onMenuOpen={() => {setSelectDepartmentActive(true)}}
                                    onMenuClose={() => {setSelectDepartmentActive(false)}}
                                    styles={customStyles}
                                    placeholder={'Факультет'}
                                    isSearchable={ false }
                                    components={{ DropdownIndicator }}
                                    instanceId={'department'}
                                    inputId={'department'}
                            />

                        </div>
                        <div className={style.input}>
                            <Input
                                color='white'
                                placeholder={yearPlaceholder}
                                name={studenttransfer[1].name}
                                onFocus={() => {
                                    setYearPlaceholder('')
                                }}
                                onBlur={(e) => {
                                    if ((e.target.value) !== '') {
                                        setYearPlaceholder('')
                                    } else {
                                        setYearPlaceholder(studenttransfer[1].placeholder)
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>



                <div className={style['pay-container']}>
                    <div className={style.method}>
                        {paymentMethod.map(method => (
                            <div
                                className={(activeMethod === method.name) ? [style.item + ' ' + style.item_active] : [style.item]}
                                key={method.id}
                                onClick={()=> {selectMethod(`${method.name}`)}}
                            >
                                <div className={style['method-name']}>{method.name}
                                    {
                                        method.icon &&
                                        <div className={style['method-icon']}>{method.icon}</div>
                                    }
                                </div>

                            </div>
                        ))}
                        <div className={style.item}>
                            ...
                        </div>
                    </div>

                    <div className={style.value}>
                        {!isMobile
                        && (
                            <>
                                <div className={style['value-items']}>
                                    {paymentValue.map(valueItem => (
                                        <Value key={valueItem.id}
                                               mod='select'
                                               value={valueItem.value}
                                               functionValueActive = {()=> {setSelectedValue(`${valueItem.value}`); setActiveValue(`${valueItem.id}`)}}
                                               isSelected = {activeValue == valueItem.id}
                                        />
                                    ))}
                                </div>
                                <div className={style['custom-donate']}>
                                    <Input
                                        color='white'
                                        mod='select'
                                        placeholder = {otherPlaceholder}
                                        onClick={()=> {setActiveValue('input')}}
                                        isSelected = {activeValue === 'input'}
                                        name="custom-donate-value"
                                        onInput=  {(e)=> { setSelectedValue(e.target.value)}}
                                        onFocus={() => setOtherPlaceholder('')}
                                        onBlur={(e) => {setOtherPlaceholder('Другая сумма');
                                            if ((e.target.value) === '')
                                            {
                                                setActiveValue(0)
                                            }
                                        }}
                                    />
                                </div>
                            </>
                        )}
                        {isMobile
                        && (
                            <div className={style['value-items']}>
                                {paymentValue.map(valueItem => (
                                    <Value key={valueItem.id}
                                           mod='select'
                                           value={valueItem.value}
                                           functionValueActive = {()=> {setSelectedValue(`${valueItem.value}`); setActiveValue(`${valueItem.id}`)}}
                                           isSelected = {activeValue == valueItem.id}
                                    />
                                ))}
                                <div className={cn(
                                    style['value-item'],
                                    style['value-item_custom-donate']
                                )}>
                                    <Input
                                        color='white'
                                        mod='select'
                                        placeholder = {otherPlaceholder}
                                        onClick={()=> {setActiveValue('input')}}
                                        isSelected = {activeValue === 'input'}
                                        name="custom-donate-value"
                                        onInput=  {(e)=> { setSelectedValue(e.target.value)}}
                                        onFocus={() => setOtherPlaceholder('')}
                                        onBlur={(e) => {setOtherPlaceholder('Другая сумма');
                                            if ((e.target.value) === '')
                                            {
                                                setActiveValue(0)
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                        )}



                    </div>

                    {activeValue != "input" && !isMobile && (
                        <div className={style.tooltip}>
                            {activeValue == 1 && (
                                paymentValue[0].tooltip
                            )}
                            {activeValue == 2 && (
                                paymentValue[1].tooltip
                            )}
                            {activeValue == 3 && (
                                paymentValue[2].tooltip
                            )}
                        </div>
                    )}
                </div>
                <div className={cn({
                    [style.buttons]: true,
                    [style.buttons_single]: true,
                })}>
                    {payButtons}
                </div>


                <div className={style.privacy}>
                    Отправляя свое пожертвование, вы соглашаетесь с <a className={style.link} href='/'>Политикой конфиденциальности</a>, даёте своё согласие на обработку персональных данных и принимаете условия договора пожертвования.
                </div>


            </form>
        </>
    )
}

export default Form