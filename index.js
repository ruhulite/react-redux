//add Redux library
const redux = require('redux');
//Middleware: redux logger
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const logger  = reduxLogger.createLogger();

//create action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

//action creator
function buyCake() {
    return { //define action 
        type: BUY_CAKE,
        info: 'First Redux action'
    }
}

function buyIceCream() {
    return { //define action 
        type: BUY_ICE_CREAM,
        info: 'First Redux action'
    }
}

//create reducer: (previousState, action) => newState
//initial state
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {

//     switch(action.type) {
//         case BUY_CAKE: return {
//             //if multiple property: let's copy the initial state using spread operator
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
        
//         case BUY_ICE_CREAM: return {
//             //if multiple property: let's copy the initial state using spread operator
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state;
//     }
    
// }

const cakeReducer = (state = initialCakeState, action) => {

    switch(action.type) {
        case BUY_CAKE: return {
            //if multiple property: let's copy the initial state using spread operator
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
    
}

const iceCreamReducer = (state = initialIceCreamState, action) => {

    switch(action.type) {
        case BUY_ICE_CREAM: return {
            //if multiple property: let's copy the initial state using spread operator
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
    
}

//create store: 1. Holds application state
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));

//2. Allow access to state via getStore()
console.log('initial sate', store.getState());

//4. Registers listeners via subscribe(listerner)
const unsubscribe = store.subscribe(() => {});

//3. Allows state to be updated via dispatch(action)
store.dispatch(buyCake());
store.dispatch(buyIceCream());

//5. Handlers unregistering of listeners via the function returned by subscribe(listener)
unsubscribe();



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
 Middleware
 1. Is the suggested way to extend Redux with custom functionality
 2. Provides a third-party extenson point between dispatching an action and the moment it reaches the reducer
 3. Use reducer for login, crash reporting, performing asynchronous tasks etc
 * 
 *
 * Actions
 * Asynchronous Actions
 * 1. As soon as an action was dispatched, the state was immediately updated
 * 2. If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1 
 * Same as BUY_ICECREAM as well
 * *
 * *
 * *
 * *
 * 
 * *
 * **
 * 
 * **
 * *
 * 
 * *
 * *
 * *
 * *
 * *
 * *
 * *
 * *
 * *
 * 
 */