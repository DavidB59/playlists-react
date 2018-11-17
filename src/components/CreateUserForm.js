import React from 'react'


export default function CreateUserForm(props) {
  return (<div>
<form onSubmit={props.onSubmit}>
   <label>
     Email :
     <input  name="email" onChange={props.onChange} value={props.values.email} />
   </label>
   <label>
     Password :
     <input  name="password" onChange={props.onChange} value={props.values.password} />
   </label>   
   <label>
     Confirmation :
     <input  name="confirmation" onChange={props.onChange} value={props.values.confirmation} />
   </label>

   <button type="submit">Register</button> 
 </form>




        </div>)
}

/*

 <form>
      <input   name="name" value={props.values.name} onChange={props.onChange}  />
          <input value={props.values.date} onChange={props.onChange}  />
          <input value={props.values.description} onChange={props.onChange}  />
         </form>
        

        
          
        <div>
            <button onSubmit={props.onSubmit}>
              <b>Submit</b>
            </button>
            </div>*/