export default (state = null, action = {}) => {
  switch (action.type) {
      case "EVENT_FETCHED":
      return action.playlist

      case "UPDATE":
      return action.id
    default:
      return state
  }

}