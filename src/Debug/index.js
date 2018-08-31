import React from 'react'
import { connect } from 'react-redux'

const debugStore = dispatch => {
    const action = {
        type: 'DEBUG_STORE',
        payload: {
            number: 1
        }
    }
    dispatch(action)
}

const Debug = ({ state, dispatch }) => {
    const JSONString = JSON.stringify(state, null, 2)

    return (
        <div>
            <h1>Debug</h1>
            <button onClick={() => debugStore(dispatch)}>Debug Store</button>
            <pre>
                <code>{JSONString}</code>
            </pre>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Debug)
