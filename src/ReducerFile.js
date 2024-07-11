
export const InitialState ={
    user: null,
    apartmentData: [],
    loading: true,
    error:null,
    feedbackMsg: ""
}

export const ReducerTerms = {
    FETCH_APARTMENT_SUCCESS : "fetch_apartment_success",
    FETCH_APARTMENT_ERROR: "fetch_apartment_error",
    FETCH_APARTMENT_START: "fetch_apartment_start",
    POST_APARTMENT_SUCCESS: "post_apartment_success",
    POST_APARTMENT_ERROR: "post_apartment_error",
    POST_APARTMENT_START: "post_apartment_start",
    FETCH_USER_SUCESS: "fetch_user_success",
    FETCH_USER_ERROR: "fetch_user_error",
    FETCH_USER_START: "fetch_user_start",
    FETCH_ONE_APARTMENT_SUCCESS: "fetch_one_success",
    FETCH_ONE_APARTMENT_START: "fetch_one_start",
    FETCH_ONE_APARTMENT_ERROR: "fetch_one_error",
    BOOK_APARTMENT_START:"book_apartment_start",
    BOOK_APARTMENT_SUCCESS:"book_apartment_success",
    BOOK_APARTMENT_ERROR:"book_apartment_error",
    GET_BOOKEDAPARTMENT_START: "get_bookedapartment_start",
    GET_BOOKED_APARTMENT_ERROR: "get_bookedapartment_error",
    GET_BOOKED_APARTMENT_SUCCESS: "get_bookedapartment_success",
    LOGIN_START:"login_start",
    LOGIN_SUCCESS:"login_success",
    LOGIN_ERROR:"login_error"


}

 const Reducer = (state, action) =>{
    switch (action.type) {
        case ReducerTerms.LOGIN_START:
            console.log("login start");
            
            return{
                ...state,
                loading:false
            }
            
            
        case ReducerTerms.LOGIN_SUCCESS:
            console.log("login success");
            
            return{
                ...state,
                loading:false,
                feedbackMsg: action.payload
            }
            
            
        case ReducerTerms.LOGIN_ERROR:
            console.log("login error");
            return{
                ...state,
                error:  action.payload,
            }
            
         
        case ReducerTerms.FETCH_APARTMENT_START:
            console.log("fAp start");
            return{
                ...state,
                loading: true,
                error: null
            }
            
    
        case ReducerTerms.FETCH_APARTMENT_SUCCESS:
            console.log("fAp success");
            return{
                ...state,
                loading: false,
                apartmentData: action.payload,
                error: null
            }
            
            
    
        case ReducerTerms.FETCH_APARTMENT_ERROR:
            console.log("fAp error");
            return{
                
                ...state,
                error: action.payload,
                apartmentData:null,
               
            }
            
            break;
    
        
        case ReducerTerms.POST_ERROR:
            
            break;
    
        
        default:
           return state
    }
} 
export default Reducer