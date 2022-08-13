import { NextPage } from "next";
import Image from 'next/image'
import styles from './contact.module.css'
import facebookImg from '../../public/img/facebook.svg'
import instagramImg from '../../public/img/instagram.svg'
import wechatImg from '../../public/img/wechat.svg'
import whatsappImg from '../../public/img/whatsapp.svg'
import { useReducer, useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { contactReducer, initalState, setEmailInptAC, setNameInptAC, setPhoneInptAC, setProblemTaAC } from "../calculation/contact-reducers"
import { observer } from 'mobx-react-lite'
const ContactPage: NextPage = (props: any) => {

    const [state, dispatch] = useReducer(contactReducer, initalState)
    const [resultErrMess, setResultErrMess] = useState('')
    const router = useRouter()

    const onNameInptChange = (ev: any) : void => { dispatch(setNameInptAC(ev.target.value)) }
    const onEmailInptChange = (ev: any) : void => { dispatch(setEmailInptAC(ev.target.value)) }
    const onPhoneInptChange = (ev: any) : void => { dispatch(setPhoneInptAC(ev.target.value)) }
    const onTextAreaChange = (ev: any) : void => { dispatch(setProblemTaAC(ev.target.value))}

    const errMessages: string[] = ['* Введите имя', '* Введите номер телефона', '* Введите почту', '* Вы ничего не ввели !']

    const contactBtnClick = (ev: any) : void => {
        if (state.name === '') {
            setResultErrMess(errMessages[0])
            return
        }
        if (state.email === '') {
            setResultErrMess(errMessages[2])
            return
        }
        if (state.phone === '') {
            setResultErrMess(errMessages[1])
            return
        }
        if (state.problem === '') {
            setResultErrMess(errMessages[3])
            return
        }
        props.store.addProblem(state.problem)
        setResultErrMess('')
        router.push('thx')
    }

    return <div className="contacts">
        <h1 className={styles.contactTitle}>Свяжитесь с нами</h1>
        <div className={styles.contactData}>
            <div className={styles.contactDataContainer}>
                <div>
                    <h2 className={styles.contactDataTitle}>Наши данные:</h2>
                    <div className={styles.contactItems}>
                        <div>Наша почта:</div>
                        <div>asia@baikalvl.ru</div>
                    </div>
                    <div className={styles.contactItems}>
                        <div>Телефон:</div>
                        <div>8 800 201-87-77</div>
                    </div>
                </div>
                <div>
                    <h2 className={styles.contactDataTitle}>Мы в соц. сетях:</h2>
                    <div>
                        <div className={styles.schNtwItems}>
                            <div className={styles.schNtwItem}>
                                <Image src={instagramImg} />
                                <label>Instagram</label>
                            </div>
                            <div className={styles.schNtwItem}>
                                <Image src={whatsappImg} />
                                <label>Whatsapp</label>
                            </div>
                        </div>
                        <div className={styles.schNtwItems}>
                            <div className={styles.schNtwItem}>
                                <Image src={facebookImg} />
                                <label>Facebook</label>
                            </div>
                            <div className={styles.schNtwItem}>
                                <Image src={wechatImg} />
                                <label>WeChat</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.contactDataContainer}>
                <div className={styles.contactInpts}>
                    <input onChange={onNameInptChange} value={state.name} placeholder="Имя и фамилия" />
                    <input onChange={onEmailInptChange} value={state.email} placeholder="Почта" />
                    <input onChange={onPhoneInptChange} value={state.phone} placeholder="Телефон" />
                </div>
                <div className={styles.queryContainer}>
                    <h4>Опишите ваш запрос</h4>
                    <textarea onChange={onTextAreaChange} value={state.problem}></textarea>
                    <button onClick={contactBtnClick} className={`${styles.contactBtn} btn`}>Связаться по доставке</button>
                    <p className={styles.contactComment}>Нажимая на кнопку, вы даете <span>согласие на обработку</span> своих персональных данных</p>
                </div>
            </div>
        </div>
        { resultErrMess === '' ? null : <div className={styles.errorMessage}>{resultErrMess}</div> }
    </div>
}

export default observer(ContactPage)