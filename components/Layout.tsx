import Header from "./Header/Header"
import Store from "../store/store"
import React from "react"
import { observer } from "mobx-react-lite"
const store = new Store()

const Layout = ( { children } : any) => {
    return <div className="wrapper">
        <Header from={store.calcObj?.from} to={store.calcObj?.to} currency={store.calcObj?.currency}/>
        <main className={`main`}>{ React.cloneElement(children, { store: store }) }</main>
    </div>
}

export default observer(Layout)