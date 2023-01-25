import { Link } from "gatsby"
import * as React from "react"

const Tag = ({name}: {name: String}) => {
    return <Link to={`/tags/${name}`}  className="text-xs border bg-background text-primary border-secondary  w-fit px-4 py-1 font-sans  rounded-full no-underline hover:bg-secondary transition-all">{name}</Link>
}

export default Tag