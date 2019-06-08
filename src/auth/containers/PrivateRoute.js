import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';

const mapStateToProps = ({ authReducer }) => ({
  isAuthenticated: !!authReducer.token
});

export default connect(mapStateToProps)(PrivateRoute);