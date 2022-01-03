import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "./Features";
import { RootStateType } from "./Features/root";

function App() {
  const { value } = useSelector((state: RootStateType) => state.bank);
  const dispatch = useDispatch();
  const { depositeAction, withdrawAciton, bankruptAction } = bindActionCreators(actionCreators, dispatch);

  const depositehandler = () => {
    depositeAction(1000);
  };

  const withdrawhandler = () => {
    withdrawAciton(500);
  };

  const bankrupthandler = () => {
    bankruptAction();
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
