import { bankAction, bankType, caseTypes } from "./BankReducer.type";
import { BANKRUPT, DEPOSITE, WITHDRAW } from "./BankTypes";


const bankInitialState: bankType = { value: 0 };

const bankReducer = (
  state: bankType = bankInitialState,
  action: bankAction
) => {
  switch (action.type) {
    case caseTypes.DEPOSITE:
      return { value: state.value + action.payload};
    case caseTypes.WITHDRAW:
      return {value: state.value - action.payload};
    case caseTypes.BANKRUPT:
      return {value: 0};
    default:
      return state;
  }
};

export default bankReducer;
