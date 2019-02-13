/* Bishal */
import {connect} from 'react-redux';

import * as actions from '../state/actions';
import ProductCard from '../components/global/ProductCard';

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productData) => dispatch(actions.addToCart(productData)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductCard);