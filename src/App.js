import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react'
import CounterThree from './components/CounterThree';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action.type) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
      // <CountContext.Provider value={{ count, dispatch }} >
      //   <div className="App">
      //     Count: {count}
      //     <ComponentA />
      //     <ComponentB />
      //     <ComponentC />
      //   </div>
      // </CountContext.Provider>
      <div className="App">
        <DataFetchingTwo />
      </div>
  );
}

export default App;
