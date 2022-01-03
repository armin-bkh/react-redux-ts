export interface bankType {
  value: number;
}

export enum caseTypes {
    DEPOSITE = "DEPOSITE",
    WITHDRAW = "WITHDRAW",
    BANKRUPT = "BANKRUPT",
}

export interface bankDepositeAction {
  type: caseTypes.DEPOSITE;
  payload: number;
}

export interface bankWithdrawAction {
  type: caseTypes.WITHDRAW;
  payload: number;
}

export interface bankBankruptAction {
  type: caseTypes.BANKRUPT;
}

export type bankAction =
  | bankBankruptAction
  | bankDepositeAction
  | bankWithdrawAction;
