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
  Tooltip,
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
  constructor(){
    super();

    this.state = {
      postInput: ''
    };

    this.handlePostInput = ({ target: { value: postInput }}) => this.setState({ postInput });
    this.handlePostSend = this.handlePostSend.bind(this);
  }

  componentDidMount() {
    const { fill } = this.props;

    fill();
  }

  handlePostSend() {
    const { post } = this.props;
    const { postInput } = this.state;
    
    this.setState({ postInput: '' }, post(postInput));
  }

  render() {
    const { feedReducer: { isFetching, list } , classes, postReducer } = this.props;
    const { postInput } = this.state;

    if(isFetching) return <CircularProgress />

    return (
      <Container maxWidth="md" className={classes.root}>
        <Grid 
          container
          direction="column"
          alignItems="stretch"
          spacing={7}
          wrap="nowrap"
        >
          <Grid item>
            <TextField
              placeholder="Write your post here..."
              fullWidth
              value={postInput}
              onChange={this.handlePostInput}
              InputProps={{
                className: classes.postInput,
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="Send post" onClick={this.handlePostSend}>
                      {postReducer.isFetching ? <CircularProgress size={25} /> : <Send />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            /> 
          </Grid>
          <Grid item>
            <Paper>
              <List>
                {list.map(({ id, message, createdBy, createdAtFormatted }, index) => (
                  <ListItem divider={index !== list.length - 1} key={id}>
                    <Tooltip title={createdBy} placement="left-start">
                      <ListItemAvatar>
                        <Avatar alt={`User ${createdBy}`} src={`https://i.pravatar.cc/150?u==${createdBy}`} />
                      </ListItemAvatar>
                    </Tooltip>
                    <ListItemText
                      primary={message}
                      secondary={createdAtFormatted}
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