import {COURSES} from './actions'
const initialState = {
    value:{data:[]}
}

export const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case COURSES: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}