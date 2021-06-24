import React, { Component } from 'react';

class InnerPage extends Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogpost = await import(`../../content/innerPage/${slug}.md`).catch(error => null);

        return { blogpost };
    }
    render() {
        if (!this.props.blogpost) return <div>not found</div>;

        const {
            html,
            attributes: { titlePage },
        } = this.props.blogpost.default;

        return (
            <>
                <article>
                    <div className={style.innerPage}>
                        <h1 className={style.title}>
                            {titlePage}
                        </h1>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </article>
            </>
        );
    }
}

export default InnerPage;