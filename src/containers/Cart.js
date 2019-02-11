import {connect} from 'react-redux';
import * as actions from '../state/actions';
import Cart from '../pages/Cart';

const mapStateToProps = (state) => {    
    return {
        productData: state.cart.productData     
    }
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        removeFromCart: (key) => dispatch(actions.removeProduct(key))
    }   
}

export default connect(mapStateToProps, 
                        mapDispatchToProps) (Cart);