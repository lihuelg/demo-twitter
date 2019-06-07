import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import {
  TextField,
  InputAdornment,
  Button,
  Paper,
  Typography,
  Grid,
  IconButton,
  CircularProgress,
  Snackbar,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const styles = ({ spacing }) => ({
  root: {
    height: '100%'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing(2, 5),
  },
  login: {
    margin: spacing(3)
  }
});

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      passwordVisible: false,
    };
  }
  render() {
    const { classes, authenticate, isFetching, error, isValid } = this.props;
    const { username, password, passwordVisible } = this.state;

    return (
      <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
        spacing={7}
        className={classes.root}
      >
        <Grid item>
          <Typography variant="h4">Custom Twitter</Typography>
          <Typography variant="subtitle1">By Lautaro Galarza</Typography>
        </Grid>
        <Grid item>
          <Paper className={classes.paper}>
            <TextField
              required
              type="text"
              label="User"
              margin="normal"
              variant="outlined"
              value={username}
              onChange={({ target: { value: username } }) => this.setState({ username })}
            />
            <TextField
              required
              type={passwordVisible ? 'text' : 'password'}
              label="Password"
              margin="normal"
              variant="outlined"
              value={password}
              onChange={({ target: { value: password } }) => this.setState({ password })}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="Toggle password visibility" onClick={() => this.setState(state => ({ passwordVisible: !state.passwordVisible }))}>
                      {!passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              className={classes.login}
              variant="contained"
              size="large"
              onClick={() => authenticate(username, password)}
            >
              {isFetching ? <CircularProgress/> : 'Login'}
            </Button>
            <Snackbar
              open={!isValid && error}
              message={error}
            />
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth);