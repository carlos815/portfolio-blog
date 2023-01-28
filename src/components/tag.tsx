import { Link } from "gatsby"
import * as React from "react"

const Tag = ({ name, count, lang, active = false }: { name: string, count?: number, lang: string, active: boolean }) => {
    return <Link to={`/${lang}/tags/${name}`} className={`text-xs border bg-background text-primary border-secondary  w-fit px-4 py-1 font-sans  rounded-full no-underline hover:bg-secondary transition-all flex gap-1 `} activeClassName={`${active && "bg-secondary font-bold"}`}>
        <div>{name}</div>
        {count && <div className="text-center  ">({count})</div>}
    </Link>
}

export default Tag