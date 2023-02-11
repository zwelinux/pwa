import { Link, useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { header, main, brand, contentTitle, contentText } from './layout.module.css'

const LayoutPage = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
    
        query {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }

    `)


    return(
        <div>
            <header className={header}>
                <ul>
                    <li className={brand}>
                        <Link>
                            {data.site.siteMetadata.title}
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            ABOUT
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