import React from 'react'
//import {loadEvents} from '../actions/events'
//import {connect} from 'react-redux'
//import EventsForm from './EventsForm'

export default function EventForm(props) {
  return (<div>
<form onSubmit={props.onSubmit}>
   <label>
     Name:
     <input  name="name" onChange={props.onChange} value={props.values.name} />
   </label>

   <label>
     Date:
     <input  name="date" onChange={props.onChange} value={props.values.date} />
   </label>

   <label>
     Description:
     <input  name="description" onChange={props.onChange} value={props.values.description} />
   </label>

   <button type="submit">Save</button>
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