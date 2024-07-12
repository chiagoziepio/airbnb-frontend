
export const InitialState ={
    user: [],
    apartmentData: [],
    loading: false,
    error:null,
    feedbackMsg: "",
    bookedApartment : null
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
    LOGIN_ERROR:"login_error",
    REGISTER_START: "register_start",
    REGISTER_SUCCESS: "register_success",
    REGISTER_ERROR: "register_error",
    VERIFY_USER_START: "verify_user_start",
    VERIFY_USER_SUCCESS: "verify_user_success",
    VERIFY_USER_ERROR: "verify_user_error"

    

}

 const Reducer = (state, action) =>{
    switch (action.type) {
        case ReducerTerms.LOGIN_START:
            console.log("login start");
            
            return{
                ...state,
                loading:true
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
    
        
        case ReducerTerms.REGISTER_START:
            console.log("register start");
            return{
                ...state,
                error: null,
                feedbackMsg: "",
                loading: true
            }
            break;
        case ReducerTerms.REGISTER_SUCCESS:
            console.log("register success");
            return{
                ...state,
                error: null,
                feedbackMsg: action.payload,
                loading: false
            }
            
            break;
        case ReducerTerms.REGISTER_ERROR:
            return{
                ...state,
                error: action.payload,
                feedbackMsg: ""
            }
        case ReducerTerms.VERIFY_USER_START:
            console.log("verify start");
            return{
                ...state,
                loading: true,
                error: null,
                bookedApartment: null,
                user: []
            }
        case ReducerTerms.VERIFY_USER_SUCCESS:
            console.log("verify success");
            return{
                ...state,
                loading: false,
                user: action.payload
            }
        case ReducerTerms.VERIFY_USER_ERROR:
            console.log("verify error");
            return{
                ...state,
                user: [],
                error: action.payload
            }
            
        case ReducerTerms.GET_BOOKEDAPARTMENT_START:
            console.log("get Ap start");
            return{
                ...state,
                error: null,
                bookedApartment: null,
                
            }    
    
        
        case ReducerTerms.GET_BOOKED_APARTMENT_SUCCESS:
            console.log("get Ap success");
            return{
                ...state,
                bookedApartment: action.payload,
                
            }    
    
        
        case ReducerTerms.GET_BOOKED_APARTMENT_ERROR:
            console.log("get Ap error");
            return{
                ...state,
                error: action.payload,
                bookedApartment:null,
                
            }    
    
        
        default:
           return state
    }
} 
export default Reducer