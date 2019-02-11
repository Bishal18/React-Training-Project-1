import {connect} from 'react-redux';
import * as actions from '../state/actions';
import AddToCart from '../components/global/AddToCart';

const mapStateToProps = (state) => {
    
    return {
        productData: state.cart.productData     
    }
}
const mapDispatchToProps = (dispatch, getState) => {
    return {
        addTocartData: function(productName) {
            /* const actionFunc = actions.addtoCart(productName);
             console.log("productName in container "+productName)
            dispatch(actionFunc); */
        }
    }
   
}

export default connect(mapStateToProps, 
                        mapDispatchToProps) (AddToCart);