import { Dispatch } from "redux";
import { bankAction, caseTypes } from "./BankReducer.type";

export const depositeAction = (payload: number) => {
  return (dispatch: Dispatch<bankAction>) => {
      console.log(1);
      dispatch({ type: caseTypes.DEPOSITE, payload });
  };
};

export const withdrawAciton = (payload: number) => {
  return (dispatch: Dispatch<bankAction>) => {
      console.log(1);
      dispatch({ type: caseTypes.WITHDRAW, payload });
  };
};

export const bankruptAction = () => {
  return (dispatch: Dispatch<bankAction>) => {
      console.log(1);
      
    dispatch({ type: caseTypes.BANKRUPT });
  };
};
