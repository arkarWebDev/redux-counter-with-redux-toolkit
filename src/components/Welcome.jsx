import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Welcome = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  return (
    <button className="welcome-btn" onClick={loginHandler}>
      Login to Redux Counter
    </button>
  );
};

export default Welcome;
