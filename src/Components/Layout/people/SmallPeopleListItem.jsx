import React from 'react'

const SmallPeopleListItem = ({ user }) => {
    const { name, age } = user
    return (
        <p>
            Name:{name} ,Age:{age} Years
        </p>
    )
}

export default SmallPeopleListItem