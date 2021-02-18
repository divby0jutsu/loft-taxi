import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";

export const theme = createMuiTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#fdbf5a",
    },
    secondary: {
      main: "#1c1a19",
    },
  },
  typography: {
    h4: {
      marginBottom: 32,
    },
  },
  status: {
    danger: orange[500],
  },
  overrides: {
    MuiFormLabel: {
      root: {
        marginTop: 25,
        fontWeight: "700",
        color: "#000",
        "&$focused": {
          color: "#1473e6",
        },
      },
    },
    MuiLink: {
      root: {
        color: "#828282",
        cursor: "pointer",
      },
    },
    MuiTextField: {
      root: {
        marginBottom: 14,
        marginTop: 10,
      },
    },
    MuiInput: {
      underline: {
        "&:after": {
          "border-bottom-color": "#1473e6",
        },
      },
    },
    // MuiFormHelperText: {
    //   root: {
    //     position: "absolute",
    //     bottom: "-1.2em",
    //   },
    // },
    MuiAppBar: {
      root: {
        paddingTop: 20,
        paddingBottom: 20,
      },
    },
    MuiTabs: {
      root: {
        color: "#fff",
        cursor: "pointer",
      },
    },
    MuiTab: {
      wrapper: {
        padding: 16,
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        textAlign: "center",
      },
      containedPrimary: {
        boxShadow: "none",
        fontSize: 22,
        backgroundColor: "#fdbf5a",
        borderRadius: 70,
        marginTop: 46,
        marginBottom: 32,
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
        },
      },
      textPrimary: {
        color: "#fdbf5a",
        cursor: "pointer",
      },
    },
  },
});
