import React from 'react'
//import {loadPlaylists} from '../actions/Playlists'
//import {connect} from 'react-redux'
import PlaylistForm from './PlaylistForm'

export default function PlaylistDetails(props) {
return (
 <div>
    <button onClick={props.onEdit} type="submit">Edit Mode</button>
   {props.editMode ? <PlaylistForm values={{}} /> :
     <div>
        {!props.playlist ? <h1>Loading... </h1> :
     <>
        <h1>{props.playlist.name}</h1>
        <ul> {props.playlist.songs.map(event => 
        <li key={event.title} > 
       <p>Title : {event.title} Artist : {event.artist} Album : {event.album} </p> 

       </li> )}</ul>
                                                </>
                                                        }
<button onClick={props.onDelete} type="submit">Delete this playlist</button>
                                                </div>

                                        }


                                </div>)
                        }
