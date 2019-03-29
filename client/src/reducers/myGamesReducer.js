const myGameState = []

const myGameReducer = (state = myGameState, action) => {
  // Deep Copy
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case 'ADD_MY_GAME':
      console.log('payload', action.payload)
      newState = action.payload
      return newState
    default:
      return state
  }
}

export default myGameReducer
