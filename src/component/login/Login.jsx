import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import "./login.css";
// import ApiHandler, { signin } from "../../config/ApiHandler";
import { otpGenerate } from "../../config/ApiHandler";
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const dispalynone = {
  display: "none",
};

const dispalyshow = {
  display: "block",
};

export default function SignIn() {
  const classes = useStyles();

  const [display, setDisplay] = useState(dispalynone);
  const [phoneNo, setPhoneNo] = useState(null);
  const [otp, setOtp] = useState(null);
  const handleOtpGeneration = () => {
    if (display === dispalyshow) {
      signin(
        phoneNo,
        otp,
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      otpGenerate(
        phoneNo,
        (response) => {
          setDisplay(dispalyshow);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  return (
    <Fade top>
    <Container component="main" maxWidth="xs" className="login" id="login">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
    
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="phoneNo"
          label="Contact number"
          name="phoneNo"
          autoComplete="phoneNo"
          autoFocus
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
     
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="OTP"
          label="OTP"
          type="text"
          id="OTP"
          autoComplete="current-password"
          style={display}
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
       
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleOtpGeneration}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/signup" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>{/* <Copyright /> */}</Box>
    </Container>
    </Fade>
  );
}
