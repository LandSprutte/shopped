import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStoreState, useStoreActions } from "../hooks";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sigin: {
    marginTop: theme.spacing(3),
  },
  forms: {
    marginTop: theme.spacing(3),
  },
}));

function SignInView() {
  const classes = useStyles();
  const signin = useStoreActions((actions) => actions.auth.signIn);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInHandler = async () => {
    const auth = await signin({
      email,
      password,
    });

    if (auth && auth.token) {
    } else {
      handleError();
    }
  };

  const handleError = () => {
    console.error("error in login");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography variant="h2">Welcome to Shopped 🛍️</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Why you buy all that stuff boi!
        </Typography>
        <form className={classes.forms}>
          <TextField
            color="primary"
            variant="outlined"
            label="Email"
            autoComplete="email"
            required
            fullWidth
            autoFocus
            margin="normal"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            color="primary"
            variant="outlined"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            fullWidth
            margin="normal"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.sigin}
            onClick={signInHandler}
          >
            Sign In 🚀
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignInView;
