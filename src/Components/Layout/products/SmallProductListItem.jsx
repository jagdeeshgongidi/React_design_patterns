import React from 'react'

const SmallProductListItem = ({ product }) => {
    const { name, price } = product;
    return (
        <>
            <h3>name:{name} -{price}</h3>
        </>
    )
}

export default SmallProductListItem