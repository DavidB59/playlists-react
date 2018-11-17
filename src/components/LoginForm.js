import React from 'react'

export default function LoginForm(props) {
  return (<form onSubmit={props.onSubmit}> 
    <label>
      Email:
      <input type="text" name="email" value={props.values.email} onChange={props.onChange} />
    </label>
    <label>
      Password:
      <input type="password" name="password" value={props.values.password} onChange={props.onChange} />
    </label>
    
    <button type="submit">Login</button>
  </form>)
}


/*import React from 'react'
//import {loadEvents} from '../actions/events'
//import {connect} from 'react-redux'
//import EventsForm from './EventsForm'

export default function LoginForm(props) {
  return (<div>
<form onSubmit={props.onSubmit}>
   <label>
     Email:
     <input  name="email" onChange={props.onChange} value={props.values.email} />
   </label>

   <label>
     Password:
     <input  name="password" onChange={props.onChange} value={props.values.password} />
   </label>


   <button type="submit">Submit</button>
 </form>




        </div>)
}

*/