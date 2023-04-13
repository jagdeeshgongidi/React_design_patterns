import React from 'react'

const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};
    return product ? (
        <>
            <h3>name:{name}</h3>
            <p>Price:{price}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Average rating:{rating}</p>
        </>
    ) : <h1>Loading</h1>
}

export default ProductInfo