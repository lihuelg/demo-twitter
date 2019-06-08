import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  CircularProgress,
  Paper,
  Grid,
  TextField,
  Container,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Send } from '@material-ui/icons';

const styles = ({ spacing }) => ({
  root: {
    height: '100%',
    display: 'flex',
    marginTop: spacing(5)
  },
  postInput: {
    padding: spacing(1.5, 1)
  },
});

class Feed extends Component {
  componentDidMount() {
    const { fill } = this.props;

    fill();
  }

  render() {
    const { isFetching, list, classes } = this.props;
    
    if(isFetching) return <CircularProgress />

    return (
      <Container maxWidth="md" className={classes.root}>
        <Grid 
          container
          direction="column"
          alignItems="stretch"
          spacing={7}
        >
          <Grid item>
            <TextField 
              placeholder="Write your post here..."
              fullWidth
              InputProps={{
                className: classes.postInput,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="Send post">
                      <Send />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> 
          </Grid>
          <Grid item>
            <Paper>
              <List>
                {list.map(({ id, title, userId }, index) => (
                  <ListItem divider={index !== list.length - 1} key={id}>
                    <ListItemAvatar>
                      <Avatar alt={`User ${userId}`} src={`https://i.pravatar.cc/150?img=${userId}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={title}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    ); 
  }
}

export default withStyles(styles)(Feed);