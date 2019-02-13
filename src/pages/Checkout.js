//Surya

import React from "react";

import CartTable from '../components/CartTable';
import CheckOutForm from '../components/checkOutForm';

const CheckOutPage = (props)=>{
    const pdtList = props.productData;
    return(
        <div className="container float-none">
            <div className="col-md-6 float-left">
             <CartTable productDetails={pdtList} page="checkout" history={props.history} />
            </div>
            <div className="col-md-6 float-left">
                <CheckOutForm pdtDetails={pdtList} history={props.history}/>
            </div>
        </div>
    )
}

export default CheckOutPage;