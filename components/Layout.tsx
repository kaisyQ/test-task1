import Header from "./Header/Header"
import Store from "../store/store"
import { observable } from "mobx"
import React from "react"

const store = new Store()

const Layout = ( { children } : any) => {
    return <div className="wrapper">
        <Header from={store.calcObj?.from} to={store.calcObj?.to} currency={store.calcObj?.currency}/>
        <main>{ React.cloneElement(observable(children), { store: store }) }</main>
    </div>
}

export default Layout