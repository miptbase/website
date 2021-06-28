import Head from 'next/head'

export default function Layout({ children, pageTitle, pageDescription, ...props }) {
    return (
        <>
            <Head>
                <meta name="description" content={pageDescription} />
                <title>{pageTitle}</title>
            </Head>
            <section className="layout">
                <div className="content">{children}</div>
            </section>
        </>
    )
}