import { connect } from 'react-redux';
import { requestRegister } from '../actions';
import Auth from '../components/Auth';

const mapStateToProps = ({ authReducer }) => ({
  ...authReducer
});

const mapDispatchToProps = (dispatch, { history }) => ({
  handleMainClick: (username, password) => dispatch(requestRegister(username, password, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);