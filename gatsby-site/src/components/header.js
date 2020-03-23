import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <nav>
      <ul className={headerStyles.navList}>
        <li>
          <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">home</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/sample">sample</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/page-2">page-2</Link>
        </li>
        <li>
          <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeNavItem} to="/404">Error</Link>
        </li>
      </ul>
    </nav>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          className={headerStyles.link}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
