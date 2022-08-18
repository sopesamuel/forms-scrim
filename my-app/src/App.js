import React from "react"
import ReactDOM from "react-dom"
import Form from "./components/Header"

export default function App(){
 
    return(
      <div className="App">
   <Form />
   
      </div>
      
    )
}

ReactDOM.render(<App />, document.getElementById("root"))