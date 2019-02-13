
// Surya
import { connect } from 'react-redux';
import * as actions from '../state/actions';
//import Checkout from '../components/Checkout';
import CheckOutPage from '../pages/Checkout';

const mapStateToProps = (state) => {
    console.log("mapStateToProps checkout ", state)
    return (
    {
        productData : state.cart.productData
})};

const mapDispatchToProps = (dispatch, getState) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);