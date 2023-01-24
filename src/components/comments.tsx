import { cp } from "fs/promises"
import React, { createElement, useEffect, useReducer, useRef } from "react"

function Comments({ children }) {

    const commentComponentRef = useRef(null)
    useEffect(() => {
        let scriptElement = document.createElement("script")
        scriptElement.setAttribute("src", "https://utteranc.es/client.js")
        scriptElement.setAttribute("repo", "carlos815/portfolio-blog")
        scriptElement.setAttribute("issue-term", "pathname")
        scriptElement.setAttribute("label", "post-comments")
        scriptElement.setAttribute("theme", "github-dark")
        scriptElement.setAttribute("crossorigin", "anonymous")

        if (commentComponentRef) {
            commentComponentRef.current.appendChild(scriptElement)
        }

    }, [])
    return <div ref={commentComponentRef}>{children}</div>
}

export default Comments