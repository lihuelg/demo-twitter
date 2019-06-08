import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import MySnackbar from '../../shared/components/MySnackbar';

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
    const { classes, handleMainClick, isFetching, error, isValid, match: { path } } = this.props;
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
          <form noValidate>
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
                  onClick={() => handleMainClick(username, password)}
                >
                  {isFetching ? <CircularProgress/> : path.slice(1)}
                </Button>
                {path.match('login') && <Link to="/register">Don't have an account? Sign up for free!</Link>}
                <MySnackbar mustOpen={isValid != null && !isValid} variant="error" message={error} />
            </Paper>
          </form>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth);