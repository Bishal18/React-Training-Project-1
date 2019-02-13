//Apoorva

import { connect } from 'react-redux';
import AuthRoute from '../components/global/AuthRoute';

const mapStateToProps = (state) => {
return {
    authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(AuthRoute); 
 