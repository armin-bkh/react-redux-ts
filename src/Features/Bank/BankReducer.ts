import { BANKRUPT, DEPOSITE, WITHDRAW } from "./BankTypes";

interface bankType {
  value: number;
}

interface bankDepositeAction {
  type: "DEPOSITE";
  payload: number;
}

interface bankWithdrawAction {
  type: "WITHDRAW";
  payload: number;
}

interface bankBankruptAction {
  type: "BANKRUPT";
}

type bankAction = bankBankruptAction | bankDepositeAction | bankWithdrawAction;

const bankInitialState: bankType = { value: 0 };

const bankReducer = (
  state: bankType = bankInitialState,
  action: bankAction
) => {
  switch (action.type) {
    case "DEPOSITE":
      return { value: state.value + action.payload};
    case "WITHDRAW":
      return {value: state.value + action.payload};
    case "BANKRUPT":
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
