import React, { useState, useEffect } from 'react'

const DataSource = ({ getDataFunc = () => {}, resourceName, children }) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        (async () => {
            const resource = await getDataFunc();
            setState(resource)
            console.log(resource)
        })();
        
    }, [getDataFunc])
    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { [resourceName]: state })
                    }
                    return child
                })
            }
        </>
    )
}

export default DataSource