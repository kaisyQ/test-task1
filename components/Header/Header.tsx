import { css } from '@emotion/css'
import styles from './header-styles'
import Image from 'next/image'

interface IPath {
    from?: string,
    to?: string
}

import logo from './../../public/img/logo.png'

const Header = ( { from, to } : IPath) => {
    return <>
        <header className={css(styles)}>
            <div className={css({ display: 'flex', alignItems: 'center'})}>
                <Image src={logo} alt="logo" />
                <span className={
                    css({
                            marginLeft: '60px',
                            fontFamily: `'Roboto', sans-serif`,
                            fontWeight: '500',
                            fontSize: '17px',
                            lineHeight: '17px',
                            letterSpacing: '0.2px',
                            color: '#606F7A'
                        })
                }>
                    Пекин &rarr; Москва
                </span>
            </div>
            <button className={
                        css({
                        width: '132px',
                        backgroundColor: '#fff',
                        fontFamily: `'Open Sans', sans-serif`,
                        fontWeight: '600',
                        borderRadius: '3px',
                        boxShadow: '0px 4px 40px rgba(46, 80, 87, 0.12)'
            })}>
                Связаться
            </button>
        </header>
    </>
}

export default Header