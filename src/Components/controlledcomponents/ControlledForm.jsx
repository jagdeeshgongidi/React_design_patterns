import React, { useEffect, useState } from 'react'

const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState("")
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [hairColor, setHairColor] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(age)
        console.log(hairColor)
    }
    useEffect(() => {
        if (name.length < 3) {
            setNameInputError("Name must be greater than 3 characters")

        }
        else {
            setNameInputError("")
        }
    }, [name]);


    return (

        <form onSubmit={handleSubmit}>
            {nameInputError && <p>{nameInputError}</p>}
            <input 
                type="text" 
                name="name" 
                placeholder='name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="number" 
                name="age" 
                placeholder='age' 
                value={age} 
                onChange={(e) => setAge(e.target.value)} 
            />
            <input 
                type="text" 
                name="hairColor" 
                placeholder='haircolr' 
                value={hairColor} 
                onChange={(e) => setHairColor(e.target.value)}
            />
            <button>SUbmit</button>
            {/* //normal button bcoz we are in controlled form */}
        </form>
    )
}

export default ControlledForm