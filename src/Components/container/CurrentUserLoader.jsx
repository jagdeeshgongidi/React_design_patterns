// This component will fetch the current user from the server and provide it to its children.
// It accepts a single child, which must be a React element.
// The child will be cloned and the user data will be passed as props to it.
// This is useful for getting user data into the React component tree.

import React, { useState, useEffect } from 'react'
import axios from 'axios'
const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        axios.defaults.timeout = 5000;
        (async () => {
            try {
                const response = await axios.get("api/current-user", { signal: controller.signal, timeout: 5000 });
                const userData = await response.data
                setUser(userData)
                console.log(userData)
            } catch (err) {
                console.log(err)
            }
        })();

        return () => {
            isMounted = false
            isMounted && controller.abort()
        }

    }, [])

    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { user })
                    }
                    return child
                }
                )
            }
        </>
    )
}

export default CurrentUserLoader