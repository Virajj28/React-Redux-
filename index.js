// import redux from 'redux'; with file proj.
const redux = require('redux') // node module
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE= 'BUY_CAKE';
const BUY_ICECREAM= 'BUY_ICECREAM'

//action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// (previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
        
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer);
// const store = createStore(reducer); // Just for single reducers 1st responsibility
console.log('Intial State', store.getState()) //2nd
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState())) //4th
store.dispatch(buyCake()) //3rd
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe() //5th