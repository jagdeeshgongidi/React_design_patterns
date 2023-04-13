import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();
        (async () => {
            try {
                const resource = await axios.get(resourceUrl, { signal: controller.signal });
                isMounted && setState(resource.data)
                console.log(resource.data)
            } catch (err) {
                console.log(err)
            }
        })();

        return () => {
            isMounted = false
            isMounted && controller.abort()
        }


    }, [resourceUrl])
    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { [resourceName]: state })
                    }
                    return child
                }
                )
            }
        </>
    )
}

export default ResourceLoader