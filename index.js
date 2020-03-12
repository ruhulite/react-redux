//add Redux
const redux = require('redux');

//create action
const BUY_CAKE = 'BUY_CAKE';

//action creator
function buyCake() {
    return { //define action 
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

//create reducer: (previousState, action) => newState
const reducer = () => {
    
}