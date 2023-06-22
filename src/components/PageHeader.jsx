import React from "react";

const PageHeader = ({children = "Movies"}) => {
    return(
        <>
            <header className='header-section'>
                <h1>{children}</h1>
            </header>
        </>
    )
}


export default PageHeader