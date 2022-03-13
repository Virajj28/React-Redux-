// import redux from 'redux'; with file proj.
const redux = require('redux') // node module
const createStore = redux.createStore;

const Buy_Cake= 'Buy_Cake';

//action creator
function buyCake() {
    return {
        type: Buy_Cake,
        info: 'First redux action'
    }
}

// (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

const store = createStore(reducer); // 1st responsibility
console.log('Intial State', store.getState()) //2nd
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState())) //4th
store.dispatch(buyCake()) //3rd
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe() //5th