import React from "react";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import Themes from "./components/Themes";
// import { useSelector } from "react-redux";
import Todo from "./components/Todo";

function App() {
  // const theme = useSelector((state) => state.theme.value);
  // useEffect(() => {
  //   document.body.style.backgroundColor = theme.bgColor;
  //   document.body.style.color = theme.color;
  //   return () => {
  //     document.body.style.backgroundColor = null;
  //     document.body.style.color = null;
  //   };
  // }, [theme]);

  return (
    <div className="main">
      <Todo />
      {/* <Login />
      <Profile />
      <Themes /> */}
    </div>
  );
}

export default App;
