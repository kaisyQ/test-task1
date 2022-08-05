import Header from "./Header/Header"

const Layout = ( { children } : any) => {
    return <div className="wrapper">
        <Header />
        <main>{ children }</main>
    </div>
}

export default Layout