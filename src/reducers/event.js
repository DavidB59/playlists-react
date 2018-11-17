export default (state = null, action = {}) => {
  switch (action.type) {
      case "EVENT_FETCHED":
      return action.event

      case "UPDATE":
      return action.id
    default:
      return state
  }

}