import React from "react"
import FooterStyles from './footer.module.scss'


const Footer = () => {
    return (
        <footer className={FooterStyles.footer}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    )
}

export default Footer