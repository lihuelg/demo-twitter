import { connect } from 'react-redux';
import { requestFeed, addPost } from '../actions';
import Feed from '../components/Feed';

const mapStateToProps = ({ feedReducer }) => ({
  ...feedReducer
});

const mapDispatchToProps = dispatch => ({
  fill: () => dispatch(requestFeed()),
  post: post => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);