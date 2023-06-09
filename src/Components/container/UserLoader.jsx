import React, { useState, useEffect } from 'react'
import axios from 'axios'
const UserLoader = ({ userID, children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();
        (async () => {
            try {
                const response = await axios.get(`api/users/${userID}`, { signal: controller.signal })
                console.log(response.data)
                isMounted && setUser(response.data)
            } catch (err) {
                console.log(err)
            }
        })();
        return () => {
            isMounted = false
            isMounted && controller.abort()
        }

    }, [userID])
    return (
        <>
            {
                React.Children.map(children, child => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, { user })
                    }
                    return child
                })
            }
        </>
    )
}

export default UserLoader