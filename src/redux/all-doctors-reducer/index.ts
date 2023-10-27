
const initialState = {
 allDoctors:[]


};

export default function allDoctorsReducer(state = initialState, action:any) {
  switch (action.type) {
    case 'SET_ALL_DOCTORS':
      return {
        ...state,
        allDoctors: action.value,
      };
   
    default:
      return state;
  }
}
