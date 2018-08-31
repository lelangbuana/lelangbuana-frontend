import React from 'react'
import { connect } from 'react-redux'

const Debug = ({ state }) => {
    return (
        <div>
            <h1>Debug</h1>
            <p>{JSON.stringify(state)}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Debug)
