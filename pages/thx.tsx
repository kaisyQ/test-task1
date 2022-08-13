import { useEffect } from "react";
import { NextPage } from "next";
import { css } from '@emotion/css'
import Link from "next/link"
const ThxPage: NextPage = () => {
    useEffect(() => {
        document.body.style.backgroundImage = 'none'
      }, [])
    return <>
        <div className={css({ marginTop: '220px' })}>
                <h1 className={css({
                    fontFamily: `'Open Sans', sans-serif`,
                    fontWeight: 600,
                    fontSize: '48px',
                    lineHeight: '48px',
                    letterSpacing: '0.2px',
                    color: '#606F7A',
                    marginBottom: '36px'
                })}>
                    Спасибо за заявку!
                </h1>
                <h2 className={css({
                        fontFamily: `'Open Sans', sans-serif`,
                        fontWeight: 400,
                        fontSize: '36px',
                        lineHeight: '36px',
                        letterSpacing: '0.2px',
                        color: '#606F7A',
                        marginBottom: '48px'
                })}>
                    Мы свяжемся с вами в ближайшее время.
                </h2>
            </div>
            <Link href='contact'><button className="btn">Вернуться к контактам &rarr;</button></Link>
    </>
}

export default ThxPage