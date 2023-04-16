import React from 'react'

const UserInfo = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {};
    console.log(user)
    return user ? (
        <>
            <h3>Name:{name}</h3>
            <p>Age:{age} Years</p>
            <p>HairColor:{hairColor}</p>
            <h3>Hobbies</h3>
            <ul>
                {
                    hobbies.map(hobby => <li key={hobby}>{hobby}</li>)
                }
            </ul>
        </>
    )
        :
        <h1>Loading...</h1>
}

export default UserInfo