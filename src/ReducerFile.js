
export const InitialState ={
    user: null,
    apartmentData: null,
    loading: false,
    error:false,
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
        case ReducerTerms.FETCH_START:
            return{
                loading: true,
                error: false
            }
            
    
        case ReducerTerms.FETCH_SUCCESS:
            
            break;
    
        case ReducerTerms.FETCH_ERROR:
            
            break;
    
        case ReducerTerms.POST_START:
            
            break;
    
        case ReducerTerms.LOGIN_START:
            return{
                ...state,
                loading:true,
                error: false,
                feedbackMsg: ""
            }
            
            break;
        case ReducerTerms.LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                error: false,
                feedbackMsg: action.payload
            }
            
            break;
        case ReducerTerms.LOGIN_ERROR:
            return{
                ...state,
                loading:false,
                error: true,
                feedbackMsg: action.payload
            }
            
            break;
        case ReducerTerms.POST_ERROR:
            
            break;
    
        
        default:
           return state
    }
} 
export default Reducer