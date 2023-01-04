import React, { useEffect } from "react"
import "./tree.css"


export interface treeList {
    name: string
    url?: string
    children?: treeList[]
}

function Tree({ children, treeList }: { children?, treeList: treeList[] }) {
    const generateTree = (TreeList: treeList[], firstRun = true) => {
        return <ul className={firstRun ? "tree" : ''}>
            {TreeList.map((element, index) => {
                const isFirstElement = index == 0
                const isLastElement = index == TreeList.length - 1
                let className = "";

                if (firstRun && isFirstElement) {
                    className = "first"
                } else if (firstRun && isLastElement) {
                    className = "last"
                }

                if (element.children !== undefined) {
                    return <li className={className}>{element.name}
                        {generateTree(element.children, false)}
                    </li>
                }
                return <li className={className}>{element.name}</li>
            })}
        </ul>
    }

    return <>
        {generateTree(treeList)}

    </>

}


export default Tree
