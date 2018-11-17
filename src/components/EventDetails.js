import React from 'react'
//import {loadEvents} from '../actions/events'
//import {connect} from 'react-redux'
import EventForm from './EventForm'

export default function EventDetails(props) {
        return (
                <div>

                        <button onClick={props.onEdit} type="submit">Edit Mode</button>

                        {props.editMode ? <EventForm values={{}} /> :
                                <div>

                                        {!props.event ? <h1>Loading... </h1> :

                                                <>
                                                        <h1>{props.event.name}</h1>
                                                        <i>{props.event.date} </i>
                                                        <p> {props.event.description}</p>
                                                </>
                                        }



                                        <button onClick={props.onDelete} type="submit">Delete</button>
                                </div>

                        }


                </div>)
}
