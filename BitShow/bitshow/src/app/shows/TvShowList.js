import React from 'react';
import { ShowItem } from './ShowItem'

const TvShowList = (props) => {

    return props.shows.map((show, index) => {
        return <ShowItem key={index} show={show} />
    })


}

export { TvShowList }