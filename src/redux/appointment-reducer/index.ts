
const initialState = {
    appintTitle: '',
    drName: '',
    apponintDate: '',
    appointmentTime: '12 PM',
    avatar: '',
    drId:'',
    userId:''

   };
   
   export default function AppointmentReducer(state = initialState, action:any) {
     switch (action.type) {
       case 'SET_APPOINT_TITLE':
         return {
           ...state,
           appintTitle: action.value,
         };
         case 'SET_DR_NAME':
            return {
              ...state,
              drName: action.value,
            };
         case 'SET_DATE_VALUE':
                return {
                  ...state,
                  apponintDate: action.value,
                };
         case 'SET_TIME_VALUE':
                return {
                  ...state,
                  appointmentTime: action.value,
                };
         case 'SET_AVATAR_VALUE':
                return {
                  ...state,
                  avatar: action.value,
                };
         case 'SET_ID_VALUE':
                return {
                  ...state,
                  drId: action.value,
                };
         case 'SET_USERID_VALUE':
                return {
                  ...state,
                  userId: action.value,
                };
       default:
         return state;
     }
   }
   