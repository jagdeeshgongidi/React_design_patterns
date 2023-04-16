import React, { createRef } from 'react'
const inputRef = createRef()
const ageRef = createRef()
const hairColorRef = createRef()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
    console.log(ageRef.current.value)
    console.log(hairColorRef.current.value)
}


const UnControlledForm = () => {

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder='name' ref={inputRef} />
            <input type="number" name="age" placeholder='age' ref={ageRef} />
            <input type="text" name="hairColor" placeholder='haircolr' ref={hairColorRef} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default UnControlledForm