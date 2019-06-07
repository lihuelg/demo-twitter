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
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';


const styles = ({ spacing }) => ({
  root: {
    height: '100%'
  },
  paper: {
    padding: spacing(2, 5),
  } 
});

class Auth extends Component {
  render() {
    const { classes } = this.props;

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
            />
            <TextField
              required
              type="password"
              label="Password"
              margin="normal"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="Toggle password visibility" onClick={()=>{}}>
                      {true ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button variant="contained" size="large">Login</Button>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Auth);