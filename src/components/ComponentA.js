import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component A: {countContext.count}
            <button onClick={() => countContext.dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => countContext.dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => countContext.dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default ComponentA
