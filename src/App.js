import React,{Fragment} from "react"
import Child from "./Child";
import Provider from "./Provider";
import Context from "./context";

const App = () =>{
  return(
    <div>
      <h1 align="center">Context API</h1>
      <Provider>
        <Child />
      </Provider>
    </div>
  )
}

export default App;
