import { Outlet } from "react-router-dom";
import Header from "../../common/Header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div style={{ padding: "15px 10px 10px 10px" }}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
