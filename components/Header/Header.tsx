import { useRouter } from "next/router"
import { observer } from "mobx-react-lite"
import { css } from '@emotion/css'
import styles from './header-styles'
import Image from 'next/image'
import Link from 'next/link'

interface IPath {
    from?: string,
    to?: string,
    currency?: string
}

import logo from './../../public/img/logo.png'

const Header = ( { from, to, currency } : IPath) => {
    const router = useRouter()
    console.log(router.route)
    return <>
        <header className={css(styles)}>
            <div className={css({ display: 'flex', alignItems: 'center'})}>
                <Link href='/'>
                    <Image src={logo} alt="logo" className={css({cursor: 'pointer'})}/>
                </Link>
                {   router.route === '/products' && from && to && currency ? <span className={
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
                        {from} &rarr; {to}, {currency}
                    </span>
                    : null
                }
                {
                    router.route === '/calculation' && from && to && currency ?
                        <span>Добавленая мебель(1)</span> :
                        null
                }
            </div>
            <Link href='contact'>
                <button className={`btn btnHeader`}>
                    Связаться
                </button>
            </Link>
        </header>
    </>
}

export default observer(Header)