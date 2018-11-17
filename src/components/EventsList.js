import * as React from 'react'
import { Link } from 'react-router-dom'


export default function EventsList(props) {
  return (<div>
   
    <ul>
      { !props.events ? <h1>Loading playlists....</h1>  : props.events.playlists.map(event => <li key={event.id} >    
       <Link to={ `/events/${event.id} ` }> {event.name} </Link>

       </li>
      
       
      ) }
    </ul>

  </div>)
}
