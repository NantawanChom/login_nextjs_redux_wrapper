
const reducer = (state = {
    isLogin: false,
    user: null
}, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            state={
                ...state,
                isLogin:true,
                user:action.user
            }
            break
        case 'LOGOUT':
            state={
                ...state,
                user:null
            }
            break;
            
        default: return state;
    }
    return state;
}

export default reducer;