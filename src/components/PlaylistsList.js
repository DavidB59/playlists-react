import * as React from 'react'
import { Link } from 'react-router-dom'


export default function PlaylistList(props) {
  return (<div>
   
    <ul>
      { !props.playlists ? <h1>Loading playlists....</h1>  : props.playlists.map(event => <li key={event.id} >    
       <Link to={ `/playlists/${event.id} ` }> {event.name} </Link>

       </li>
      
       
      ) }
    </ul>

  </div>)
}
