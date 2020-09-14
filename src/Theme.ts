import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: (palette) => {
    return {
      allVariants: {
        color: "#fbf1c7",
        fontWeight: "bold",
        caretColor: "#fbf1c7",
      },
    };
  },
  palette: {
    background: {
      default: "#282828",
      paper: "#3c3836",
    },
    primary: {
      main: "#458588",
      light: "#b8bb26",
      dark: "#458588",
      contrastText: "#fbf1c7",
    },
    secondary: {
      main: "#fabd2f",
      light: "#fbf1c7",
      dark: "#fabd2f",
      contrastText: "#fbf1c7",
    },
    text: {
      primary: "#fbf1c7",
      secondary: "#fbf1c7",
      hint: "#fbf1c7",
      disabled: "#928374",
    },
    warning: {
      main: "#fb4834",
    },
    common: {
      black: "#282828",
      white: "#fbf1c7",
    },
    type: "dark",
    divider: "#d3869b",
    action: {
      hover: "#83a598",
      disabled: "#928374",
      focus: "#83a598",
      active: "#83a598",
      selected: "#83a598",
      disabledBackground: "#83a598",

      activatedOpacity: 0.8,
      focusOpacity: 0.8,
      hoverOpacity: 0.5,
      selectedOpacity: 0.8,
      disabledOpacity: 0.8,
    },
    error: {
      main: "#fb4934",
    },
    info: {
      main: "#fe8019",
      dark: "#fe8019",
      light: "#fe8019",
      contrastText: "#fbf1c7",
    },
    success: {
      main: "#689d6a",
      light: "#8ec07c",
    },
  },
});

export default theme;
