import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { header, main, contentTitle, contentText, nav, navLink } from './layout.module.css'

const LayoutPage = ({ pageTitle, children }) => {

const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)


    return(
        <div>
            <header className={header}>
                <ul className={nav}>
                    <li className={navLink}>
                        <Link>
                            {data.site.siteMetadata.title}
                        </Link>
                    </li>
                    <li className={navLink}>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>
                    <li className={navLink}>
                        <Link to='/about'>
                            ABOUT
                        </Link>
                    </li>
                    <li className={navLink}>
                        <Link to="/blog">
                            BLOG
                        </Link>
                    </li>
                </ul>
            </header>

            <main className={main}>
                <h1 className={contentTitle}>{pageTitle}</h1>
                <p className={contentText}>{children}</p>
            </main>


        </div>
    )
}

export default LayoutPage