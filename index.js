//add Redux library
const redux = require('redux');
const createStore = redux.createStore;

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
//initial state
const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case BUY_CAKE: return {
            //if multiple property: let's copy the initial state using spread operator
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
    
}

//create store: 1. Holds application state
const store = createStore(reducer);

//2. Allow access to state via getStore()
console.log('init sate', store.getState());

//4. Registers listeners via subscribe(listerner)
store.subscribe(() => console.log('Updated state ', store.getState()));

//3. Allows state to be updated via dispatch(action)
store.dispatch(buyCake());

//5. Handlers unregistering of listeners via the function returned by subscribe(listener)
//unsubscribe();



/******
 * Important note
 * 
 * 
Redux Store:
Responsibility - 
1. Holds application state
2. Allow access to state via getStore()
3. Allows state to be updated via dispatch(action)
4. Registers listeners via subscribe(listerner)
5. Handlers unregistering of listeners via the function returned by subscribe(listener)

 * 
 * 
 * 
 * 
 */