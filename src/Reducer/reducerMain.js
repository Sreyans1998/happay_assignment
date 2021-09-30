import changeTheQuantity from './Reducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    changeTheQuantity,
    // changeTheCart
})

export default rootReducer