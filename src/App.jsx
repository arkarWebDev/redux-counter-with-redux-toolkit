import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
      <Navbar />
      {!isLogin && <Welcome />}
      {isLogin && <Counter />}
    </>
  );
};

export default App;
