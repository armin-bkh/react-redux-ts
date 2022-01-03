import { bankAction, caseTypes } from './BankReducer.type';

export const depositeBank = (payload: number) => {
    return { type: caseTypes.DEPOSITE, payload: payload }
}

export const withdrawBank = (payload: number) => {
    return { type: caseTypes.WITHDRAW, payload: payload }
}

export const bankruptBank = () => {
    return { type: caseTypes.BANKRUPT }
}