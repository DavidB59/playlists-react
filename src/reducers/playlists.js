export default (state = null, action = {}) => {
  switch (action.type) {
    case "EVENTS_FETCHED":
      return action.playlists
      case "EVENT_CREATE_SUCCESS":
      if (action.playlist.name===''){
        return state}
      return [...state,action.playlist]
    
      case 'EVENT_DELETE_SUCCESS':
      console.log(action.id)
      const testons = state.filter(elt => elt.id != action.id)
     //state.forEach (a => console.log(a.id))
      return testons

    default:
      return state
  }

}