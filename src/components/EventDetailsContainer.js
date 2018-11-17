import React from 'react'
import {connect} from 'react-redux'
import EventDetails from './EventDetails'
import {loadEvent, deleteEvent} from '../actions/events'

class EventDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvent(Number(this.props.match.params.id))
  }

  onDelete = () => {
    //event.preventDefault()
   this.props.deleteEvent(this.props.match.params.id)
   this.props.history.push('/')
  }

  state = { editMode: false }

  onEdit = () => {
    console.log(this.props)

    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        name: this.props.event.name,
        date: this.props.event.date,
        description: this.props.event.description
      }
    })
  }

  onChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  } 

  onSubmit = (event) => {
    //event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.updateEvent(this.props.event.id, this.state.formValues)
  }

  render() {
    return <EventDetails 
    event={this.props.event}        
    onDelete={this.onDelete}
    onSubmit={this.onSubmit}
    onEdit={this.onEdit}
    onChange={this.onChange}
    formValues={this.state.formValues}
    editMode={this.state.editMode}
    />
    
  }
}

const mapStateToProps = state => ({
  event: state.event
})

export default connect(mapStateToProps, {loadEvent,deleteEvent})(EventDetailsContainer)