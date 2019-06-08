import { connect } from 'react-redux';
import Feed from '../components/Feed';

const mapStateToProps = ({ feedReducer }) => ({
  ...feedReducer
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);