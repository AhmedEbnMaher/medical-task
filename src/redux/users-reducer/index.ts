
const initialState = {
  profile:{
    profileUrl:'',
    userName:'',
    email:'',
    id:''
  },
 isLogin:false,
 userType:'user',


};

export default function userReducer(state = initialState, action:any) {
  switch (action.type) {
    case 'SET_LOGIN_STATE':
      return {
        ...state,
        isLogin: action.value,
      };
      case 'SET_USER_TYPE':
        return {
          ...state,
          userType: action.value,
        };
 
        return {
        ...state,
        email: action.value,
        };
        case 'SET_PROFILE_DATA':
          return {
            ...state,
            profile: action.value,
          };
    
  
    default:
      return state;
  }
}
