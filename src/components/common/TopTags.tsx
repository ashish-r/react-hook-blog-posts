import React, { useState, useEffect } from 'react'
import { getTopTags } from '../../utils/apis'
import { ITopTag, IAPIState } from '../../interfaces'

const TopTags = () => {
    const [topTags, setTopTags] = useState<IAPIState<ITopTag[] | undefined>>(
        {isLoading: true, data: undefined}
    )
    
    useEffect(() => {
        (async() => {
            setTopTags({isLoading: false, data: await getTopTags()})
        })()
    }, [])

    if(topTags.isLoading) {
        return <p>Loading....</p>
    }
    return !topTags.data ? 
        (
            <p>Loading Top Tags Failed </p>
        ) :
        (
            <>
                {
                    topTags.data.map(({slug, name}) => (<p key={slug}> {`${name}: ${slug}`} </p>))
                }
            </>
        )
}

export default React.memo(TopTags)
