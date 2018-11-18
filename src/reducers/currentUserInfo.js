export default (state = null, action = {}) => {
  switch (action.type) {  
      case "CURRENT_USER":
      return action.userId   
    default:
      return state
  }

}
