import { bankAction, caseTypes } from './BankReducer.type';

export const depositeHandler = (payload: number) => {
    return { type: caseTypes.DEPOSITE, payload: payload }
}

export const withdrawHandler = (payload: number) => {
    return { type: caseTypes.WITHDRAW, payload: payload }
}

export const bankruptHandler = () => {
    return { type: caseTypes.DEPOSITE }
}