import React from 'react'



function Loading(props) {
    if (props.loading) {
        return <h1 className='loader'>Loading!</h1>
    } else {
        return <h1 className='loader'>Not loading</h1>
    }
}

export default Loading