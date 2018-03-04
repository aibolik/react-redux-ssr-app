import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestRegister } from '../../../store/user';

import Registration from '../components';

const mapDispatchToProps = dispatch => bindActionCreators({
  requestRegister
}, dispatch);

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);