import React from "react";
import "./style.css";
import Form from './Form'

export default function App() {
  const getData=(name)=>{
   console.log("thish is nithish" , name)
  }
  return (
    <div>
      <Form onSubmit={getData}/>
    </div>
  );
}
