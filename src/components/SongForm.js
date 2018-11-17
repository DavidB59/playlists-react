import React from 'react'
//import {loadEvents} from '../actions/events'
//import {connect} from 'react-redux'
//import EventsForm from './EventsForm'

export default function SongForm(props) {
  return (<div>
<form onSubmit={props.onSubmit}>
   <label>
     Title:
     <input  name="title" onChange={props.onChange} value={props.values.title} />
   </label>

   <label>
     Artist:
     <input  name="artist" onChange={props.onChange} value={props.values.artist} />
   </label>

   <label>
     Album:
     <input  name="album" onChange={props.onChange} value={props.values.album} />
  </label>

   <button type="submit">Save</button>
 </form>




        </div>)
}

/*

 <form>
      <input   name="name" value={props.values.name} onChange={props.onChange}  />
          <input value={props.values.Artist} onChange={props.onChange}  />
          <input value={props.values.album} onChange={props.onChange}  />
         </form>
        

        
          
        <div>
            <button onSubmit={props.onSubmit}>
              <b>Submit</b>
            </button>
            </div>*/