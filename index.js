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