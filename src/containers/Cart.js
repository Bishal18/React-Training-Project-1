//Bishal / Surya

import {connect} from 'react-redux';
import * as actions from '../state/actions';
import Cart from '../pages/Cart';
//import CartTable from '../components/CartTable';

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

/*export default connect(mapStateToProps, 
    mapDispatchToProps) (CartTable)*/

export default connect(mapStateToProps, 
                        mapDispatchToProps) (Cart);