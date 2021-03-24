import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import React from "react";

/*
    https://sheetjs.com/
    https://github.com/SheetJS/sheetjs
    https://docs.sheetjs.com/
 */

export default function Home() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main>
                    <h1>
                        Welcome
                    </h1>
                </main>
            </div>
        </Layout>
    )
}
