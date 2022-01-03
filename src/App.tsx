import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  bankruptBank,
  depositeBank,
  withdrawBank,
} from "./Features/Bank/BankActions";
import { bankType } from "./Features/Bank/BankReducer.type";
import { RootStateType } from "./Features/root";

function App() {
  const { value } = useSelector((state: RootStateType) => state.bank);
  const dispatch = useDispatch();
  const depositehandler = () => {
    dispatch(depositeBank(1000));
  };

  const withdrawhandler = () => {
    dispatch(withdrawBank(500));
  };

  const bankrupthandler = () => {
    dispatch(bankruptBank());
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={depositehandler}>deposite</button>
      <button onClick={withdrawhandler}>withdraw</button>
      <button onClick={bankrupthandler}>bankrupt</button>
    </div>
  );
}

export default App;
