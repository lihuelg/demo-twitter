import { connect } from 'react-redux';
import { requestAuth } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = ({ authReducer }) => ({
  ...authReducer
});

const mapDispatchToProps = (dispatch, { history }) => ({
  handleMainClick: (username, password) => dispatch(requestAuth(username, password, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);