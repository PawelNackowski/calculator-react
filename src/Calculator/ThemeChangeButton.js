import { useDispatch, useSelector } from "react-redux"
import { ButtonModePosition, ThemeButton } from "./styled"
import { selectDarkTheme, toggleTheme } from "./themeSlice";

export const ThemeChangeButton = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectDarkTheme);

  return (
    <ButtonModePosition>
      dark mode
      <ThemeButton onClick={() => dispatch(toggleTheme())}>
        {isDarkTheme ? "ON" : "OFF"}
      </ThemeButton>
    </ButtonModePosition>
  );
};