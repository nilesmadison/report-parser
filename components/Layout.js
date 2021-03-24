import React from 'react'
import style from '../styles/Layout.module.css'
import Header from "./Header";

export default function Layout({children}) {
    return (
        <div className={style.main}>
            <Header/>
            <div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
