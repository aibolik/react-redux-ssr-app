import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { singInRequest } from '../../../store/user';

import Authentication from '../components';

const mapDispatchToProps = dispatch => bindActionCreators({
  signInRequest
}, dispatch);

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
