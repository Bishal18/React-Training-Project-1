import {connect} from 'react-redux';

import * as actions from '../state/actions';
import ProductSection from '../components/ProductSection';

const mapStateToProps = (state) => {
    console.log("state ", state)
    return {
        loading: state.listing.loading,
        products: state.listing.productList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllProductData:(filterSettings)=>dispatch(actions.fetchAllProducts(filterSettings))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductSection);