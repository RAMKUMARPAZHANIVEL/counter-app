let initialState = 0;

const DefaultReducer = (state = initialState,action) => {
    switch(action.type){
        case "INCREASE_NUMBER" :
                console.log("called inc")
                return action.payload+1;
        case "DECREASE_NUMBER" :
              if(action.payload > 0)
               return action.payload-1;
        case "RESET_NUMBER" :
            return initialState;
        default :
         return state
    }
}

export default DefaultReducer;