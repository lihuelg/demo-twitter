import { connect } from 'react-redux';
import { requestFeed } from '../actions';
import Feed from '../components/Feed';

const mapStateToProps = ({ feedReducer }) => ({
  ...feedReducer
});

const mapDispatchToProps = dispatch => ({
  fill: () => dispatch(requestFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);