import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RoutesMain } from "./routes";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext.jsx";
import { Loading } from "./components/Loading";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}
      <ToastContainer position="top-right" autoClose={1 * 1000} theme="colored" />
    </>
  );
};

export default App;
