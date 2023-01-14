import { useReducer } from "react";

const actionType = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
  CHANGE_COUNT: "CHANGE_COUNT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.INCREASE: {
      return state + 1;
    }

    case actionType.DECREASE: {
      return state - 1;
    }

    case actionType.CHANGE_COUNT: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleIncreaseClick = () => {
    dispatch({ type: actionType.INCREASE });
  };

  const handleDecreaseClick = () => {
    dispatch({ type: actionType.DECREASE });
  };

  const changeCount = (count) => {
    dispatch({ type: actionType.CHANGE_COUNT, payload: count });
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={() => changeCount(50)}>Change count to 50</button>
      <button onClick={() => changeCount(100)}>Change count to 100</button>
    </>
  );
};

export default ReducerHook;
