

import * as React from "react"

const Section = ({ children }) => {

    return (
        <section className=" min-h-[95vh] md:p-12 p-6 border-b relative page flex flex-col " >
            {children}

        </section>
    )
}

export default Section
