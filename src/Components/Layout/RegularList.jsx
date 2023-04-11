import React from 'react'

export const RegularList = ({
    items,
    resourceName,
    itemComponent: ItemComponent
}) => {
    return (
        items.map((item, i) => {
            console.log(item)
            return <ItemComponent key={i} {...{ [resourceName]: item }} />
        })

        //resource name is the name of the prop 
        //<ItemComponent person={item} />
    )
}
