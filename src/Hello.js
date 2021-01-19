import React from 'react';

export const Hello = () => {
    React.useEffect(() => {
        console.log("render")

        // cleanup logic
        return () => {
            console.log("unmount")
        }

    }, [])   

    return(
        <div>hello</div>
    )
}