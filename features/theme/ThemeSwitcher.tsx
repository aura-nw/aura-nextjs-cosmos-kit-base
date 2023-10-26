import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/features/hook";
import { selectTheme, updateTheme } from "@/features/theme/theme.slice";

const ThemeSwitcher = () => {
  const currentTheme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()
  const handleClick = (theme: string) => dispatch(updateTheme(theme))

  return (
    <Box>
      <Button
        sx={{ justifyContent: 'center', width: '44px', height: '44px' }}
        onClick={() => (currentTheme == 'dark' ? handleClick('light') : handleClick('dark'))}
      >
        {currentTheme == 'dark' ? (
          <span>night</span>
        ) : (
          <span>day</span>
        )}
      </Button>
    </Box>
  )
}

export default ThemeSwitcher
