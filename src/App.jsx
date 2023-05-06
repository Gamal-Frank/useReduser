import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state,action) => {
      switch (action.type) {
        case "setName":
          return {...state, user: action.payload };
        case "addName":
          return { ...state, names: [...state.names, action.paylod] };
          default: return state
      }
    },
    {
      names: [],
     user:"frank",
    }
  );
  return <div>
    <div>{state.user}</div>
    <input type="text" onChange={(e)=>dispatch({type:"setName",payload:e.target.value})} />
  </div>;
}

export default App;
