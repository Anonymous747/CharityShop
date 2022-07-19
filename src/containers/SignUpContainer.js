import {connect} from 'react-redux';
import {getProps} from '../store/reducers/SignUpReducer';
import {signUp} from '../store/actions/SignUpActions';
import SignUpPage from '../screens/SignUpPage';

const mapStateToProps = state => getProps(state);

const mapDispatchToProps = dispatch => ({
  signUp: signUp(),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
