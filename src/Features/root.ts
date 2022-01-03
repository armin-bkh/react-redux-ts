import { combineReducers } from 'redux'
import bankReducer from './Bank/BankReducer'

const rootReducer = combineReducers({
    bank: bankReducer,
})

export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;