import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../features/theme";

function Themes() {
  const dispatch = useDispatch();
  const [themeData, setThemeData] = useState({
    color: "",
    bgColor: "",
  });
  const handleTheme = (e) => {
    e.preventDefault();
    dispatch(changeTheme(themeData));
  };
  return (
    <div>
      <form onSubmit={handleTheme}>
        <input
          onChange={(e) =>
            setThemeData({ ...themeData, [e.target.name]: [e.target.value] })
          }
          value={themeData.color}
          type="text"
          name="color"
          placeholder="Color..."
        />
        <input
          onChange={(e) =>
            setThemeData({ ...themeData, [e.target.name]: [e.target.value] })
          }
          value={themeData.bgColor}
          type="text"
          name="bgColor"
          placeholder="Bg-Color..."
        />
        <button>Change Theme</button>
      </form>
    </div>
  );
}

export default Themes;
