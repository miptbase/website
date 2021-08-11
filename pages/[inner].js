import Link from 'next/link'
import matter from 'gray-matter'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'
import {seoMain} from '../content/home.json';

import Layout from '../components/Layout/Layout'

export default function InnerPage({ pageTitle, frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    return (
        <Layout
            pageTitle={frontmatter.seo.title ? frontmatter.seo.title : seoMain.title}
            pageDescription={frontmatter.seo.description ? frontmatter.seo.description : seoMain.description}
            innerPatch={pageTitle}
        >
            <article>
                <>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={markdownBody} />
                </>
            </article>
        </Layout>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { inner } = ctx.params

    const content = await import(`../content/inner/${inner}.md`)
    const config = await import(`../siteconfig.json`)
    const data = matter(content.default)
    return {
        props: {
            siteTitle: config.title,
            siteDescription: config.description,
            frontmatter: data.data,
            markdownBody: data.data.content,
            pageTitle: data.data.title
        },

    }
}

export async function getStaticPaths() {
    const innerSlugs = ((context) => {
        const keys = context.keys()
        const data = keys.map((key, index) => {
            let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)

            return slug
        })
        return data
    })(require.context('../content/', true, /\.md$/))

    const paths = innerSlugs.map((slug) => `/${slug}`)

    return {
        paths,
        fallback: false,
    }
}