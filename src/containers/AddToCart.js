/* Bishal */
import {connect} from 'react-redux';
import * as actions from '../state/actions';
import AddToCart from '../components/global/AddToCart';

const mapStateToProps = (state) => {
    return {
        productFromCart: state.cart.productData     
    }
}
const mapDispatchToProps = (dispatch, getState) => {
    return {
        addToCart: (productData) => dispatch(actions.addToCart(productData)),
        removeFromCart: (key) => dispatch(actions.removeProduct(key)) 
    } 
}

export default connect(mapStateToProps, 
                        mapDispatchToProps) (AddToCart);