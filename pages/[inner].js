import Link from 'next/link'
import matter from 'gray-matter'
import rehypeRaw from 'rehype-raw'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/Layout'

export default function InnerPage({ siteTitle, siteDescription, frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    return (
        <Layout pageTitle={frontmatter.seo.title} pageDescription={frontmatter.seo.description}>
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