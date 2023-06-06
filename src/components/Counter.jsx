import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);

  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };

  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <section>
      <h3>Redux Counter</h3>
      {isShow && <h1>{counter}</h1>}
      <hr />
      <div>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseBy5Handler}>IncreaseBy5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>Toggle Counter</button>
      </div>
    </section>
  );
};

export default Counter;
