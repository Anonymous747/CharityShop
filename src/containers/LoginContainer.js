import {connect} from 'react-redux';
import {getProps} from '../store/reducers/LoginReducer';
import {fetchData} from '../store/actions/LoginActions';
import LoginPage from '../screens/LoginPage';

const mapStateToProps = state => getProps(state);

const mapDispatchToProps = dispatch => ({
  fetchUserData: fetchData(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
