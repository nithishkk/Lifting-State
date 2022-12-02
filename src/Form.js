import React from "react";


export default function Form(props) {
  const[name,setName]=React.useState()
  const ChangeHandler=(e)=>{
   setName(e.target.value)

  }
  const SubmitHnadler=(e)=>{
    e.preventDefault()
    props.onSubmit(name)
    
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <form onSubmit={SubmitHnadler}>
  <input type='text' name='name' value={name} onChange={ChangeHandler}/>
  <button>submit</button>
  </form>


    </div>
  );
}
