import { useDispatch, useSelector } from "react-redux"
import { ThemeButton } from "./styled"
import { selectDarkTheme, toggleTheme } from "./themeSlice";

export const ChangeThemeButton = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <div>
      <ThemeButton onClick={() => dispatch(toggleTheme())}>{isDarkTheme ? "ON" : "OFF"}</ThemeButton>
      </div>
  )
}