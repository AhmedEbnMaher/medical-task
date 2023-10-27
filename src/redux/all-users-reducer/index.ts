
const initialState = {
 allUsers:[]


};

export default function allUserReducer(state = initialState, action:any) {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return {
        ...state,
        allUsers: action.value,
      };
   
    default:
      return state;
  }
}
