import {connect} from 'react-redux';

import * as actions from '../state/actions';
import FilterSection from '../components/FilterSection';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProductData: function(filterSettings) {
            const actionFunc = actions.fetchAllProducts(filterSettings);
            dispatch(actionFunc);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterSection);