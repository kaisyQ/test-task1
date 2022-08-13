import { NextPage } from "next";
import { useRouter } from "next/router";
import { useLayoutEffect } from "react";

const Index : NextPage = () => {
    const router = useRouter()

    useLayoutEffect(() => {
        router.push('/index')
    }, [])

    return <>
    </>
}

export default Index