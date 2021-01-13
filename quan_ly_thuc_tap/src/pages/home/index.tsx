import React, { useEffect, useState } from 'react'
import { getProductID } from '../../api/product'

export default function HomePage() {

    const [list, setList] = useState([])

    useEffect(() => {
        
        getProductID().then( response => {
            setList(response?.data)
        })
    }, [])

    console.log('list :>> ', list);

    return (
        <div>
            
        </div>
    )
}
