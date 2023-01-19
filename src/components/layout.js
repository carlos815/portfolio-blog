import * as React from "react"
import { Link } from "gatsby"
import { ReactComponent as UrlIcon } from "../images/svg/url.svg"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  const spanish = location.pathname == "/es" || location.pathname == "/es/" || location.pathname.search(/es\/([w]*-*)*/i) > 0

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const NavLink = ({ children, to }) => <li className="w-full h-full flex justify-center "><Link className="  flex items-center justify-center uppercase md:text-sm text-xs" to={to}>
    {children}</Link></li>
  return (
    <div data-is-root-path={isRootPath} className="flex flex-col items-center">
      <nav className="max-w-5xl w-full md:px-12 px-6">
        <ul className="flex list-none w-full h-10 divide-x border border-t-0">
          <NavLink to={!spanish ? "/" : "/es"}>
            {!spanish ? "Home" : "Inicio"}
          </NavLink>
          <NavLink to={(!spanish ? "" : "/es") + "/about"}>
            {!spanish ? "About me" : "Sobre mi"}
          </NavLink>
          <NavLink to="https://carlos815.github.io/portfolio/">
            <div className="flex gap-2 items-center">
              <span>{!spanish ? "Portfolio" : "Portafolio"}</span>
              <UrlIcon />
            </div>
          </NavLink>
          <NavLink to={!spanish ? "/es" : "/"}>
            {!spanish ? "Español 🇻🇪" : "English 🇺🇸"}
          </NavLink>
        </ul>
      </nav>
      {/* <header className="global-header">{header}</header> */}
      <main className="max-w-5xl w-full">{children}</main>
    </div>
  )
}

export default Layout
