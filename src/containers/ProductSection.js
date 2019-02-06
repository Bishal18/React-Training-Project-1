import {connect} from 'react-redux';

import * as actions from '../state/actions';
import ProductSection from '../components/ProductSection';

const mapStateToProps = (state) => {
    return {
        loading: state.listing.loading,
        products: state.listing.productList        
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductSection);