import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          INVITED TO INFLUENCE
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </Container>
    </>
  );
}
