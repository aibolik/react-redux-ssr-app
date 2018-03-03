import { connect } from 'react-redux';
import Home from '../components';

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps, null)(Home);
