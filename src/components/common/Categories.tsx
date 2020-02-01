import React, { useState, useEffect } from 'react'
import { getCategories } from '../../utils/apis'
import { ICategory, IAPIState } from '../../interfaces'

const Categories = () => {
    const [categories, setCategories] = useState<IAPIState<ICategory[] | undefined>>(
        {isLoading: true, data: undefined}
    )
    
    useEffect(() => {
        (async() => {
            setCategories({isLoading: false, data: await getCategories()})
        })()
    }, [])

    if(categories.isLoading) {
        return <p>Loading....</p>
    }
    return !categories.data ? 
        (
            <p>Loading Categories Failed </p>
        ) :
        (
            <>
                {
                    categories.data.map(({slug, name}) => (<p key={slug}> {`${name}: ${slug}`} </p>))
                }
            </>
        )
}

export default React.memo(Categories)
