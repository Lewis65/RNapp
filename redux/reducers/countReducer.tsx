import { combineReducers} from 'redux'

const initialState = {
    value: 0
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COUNT':
            return {value: action.payload}
        default:
            return state
    }
}

export default combineReducers({
    count: countReducer
})