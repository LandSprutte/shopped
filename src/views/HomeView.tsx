import {
  Container,
  makeStyles,
  Slide,
  Typography,
  Fab,
  Theme,
  createStyles,
} from "@material-ui/core";
import React from "react";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

function HomeView() {
  const classes = useStyles();

  return (
    <Slide direction="up" in={true} mountOnEnter>
      <Container component="main" maxWidth="xs">
        <Typography variant="h6">
          You are now in the warm bed with me gurl
        </Typography>
        <Fab aria-label="new" color="primary" className={classes.fab}>
          <Add />
        </Fab>
      </Container>
    </Slide>
  );
}

export default HomeView;
