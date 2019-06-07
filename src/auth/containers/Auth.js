import { connect } from 'react-redux';
import { requestAuth } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = ({ authReducer }) => ({
  ...authReducer
});

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(requestAuth(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);