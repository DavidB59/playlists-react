import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../actions/users'
import CreateUserForm from './CreateUserForm'
import { Redirect} from 'react-router-dom'
class CreateUserFormContainer extends React.Component {
  state = {
    email: '',
    password:'',
    confirmation:''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    
    if(this.state.password !== this.state.confirmation) {
      alert('password do not match')
      return
    }
    else if(this.state.email === "" ) {
      alert('you must give a valid email')
      return
    }
    else if(this.state.password === "" ) {
      alert('you must give a password')
      return
    }
    event.preventDefault()
    this.setState({
      email: '',
      password:'',
      confirmation:''
    }
  )
    this.props.createUser(this.state)

    this.props.history.push('/login')
    //this.props.loadPlaylist(Number(this.props.match.params.id))
  }

  render() {
    return (<CreateUserForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />)
  }
}

export default connect(null, {createUser})(CreateUserFormContainer)