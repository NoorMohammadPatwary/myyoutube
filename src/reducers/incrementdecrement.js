const innitoialState=0;
export  const  counterNumber=(state=innitoialState,action)=>{
    switch (action.type) {
        case "increment":return state+1;
        case "decrement":return state-1;
        default: return state;
            
    }
}