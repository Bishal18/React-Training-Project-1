
//Apoorva

import React, { Component } from 'react';
import {connect} from 'react-redux';
import config from "../configs/config";
import axios from 'axios';
let apiConfig = config.apiSettings;
class CheckOutForm extends Component {
   
    constructor(props) {
        

        super(props);   
        this.state = {
            name: '',
            address:'',
            city:'',
            state:'',
            pincode:'',

            Order:  {
                "userId": 3,
                "userDetails": {
                "name": "tuy",
                "address": "AddressLine1, AddressLine2",
                "city": "CityName",
                "pincode": "560015"
                },
                "products": [{
                    "id":1,
                    "qty":1
                }
                   
                ],
                "amountPaid": 99000,
            
            }
        }
       
    }

        changeValue(e) {
            let {name, value} = e.target;
            this.setState({
                [e.target.id]:value
            })
           

        }
        updateaddress(e){

        
            
       this.state.Order.userDetails.name=this.state.name;
       this.state.Order.userDetails.address=this.state.address;
       this.state.Order.userDetails.state=this.state.state;
        this.state.Order.userDetails.pincode=this.state.pincode;
       this.state.Order.userDetails.city=this.state.city;
        console.log("details ", this.props.pdtDetails);
      this.state.Order.amountPaid=this.props.pdtDetails.totalPrice;
       this.state.Order.products.id=this.props.pdtDetails.id;
       /* this.setState({
            Order:{
                products :[{
                    "id": this.props.pdtDetails.id,
                    "qty":this.props.pdtDetails.qty
                }]
            }
        })*/
        // console.log("orders",Order)
        var order=this.state.Order;
        axios.post(`${apiConfig.baseURL}${apiConfig.orderRoute}`, order)
            .then(res => {
                console.log("success",this.props);
                console.log(res.data);
                // this.props.history.push('/OrderSummary');

                this.props.history.push({
                    pathname: '/OrderSummary',
                    state: { detail: res.data }
                  })
            })
            
            
        }
    
    render() {
        /*const formFields = ["Shipping Address", "Name", "Address", "City", "State","Pincode"];
        const formData = formFields.map(field=>{
            <label className="col-sm-2 col-form-label"> field</label>  
        })*/
        console.log(" user id " ,this.props.pdtDetails.id)
        return (
            <div className="col-md-12  float-left">
                <div className = "col-md-12">
                    <div className="panel panel-default">
                    <div className="panel-heading">Shipping</div>
                    <div className="panel-body">
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Name::</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" onChange= { (e) => this.changeValue(e) }></input>
                        </div>
                    </div>

                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Address::</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="address" onChange= { (e) => this.changeValue(e) }></input>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> City::</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="city" onChange= { (e) => this.changeValue(e) }></input>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> State::</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="state" onChange= { (e) => this.changeValue(e) }></input>
                        </div>
                    </div>
                    <div className="form-group row">
                    <label className="col-sm-2 col-form-label"> Pincode::</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="pincode"onChange= { (e) => this.changeValue(e) }></input>
                        </div>
                    </div>
                    </div>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                    <button type="button" className="btn btn-primary" onClick={(e) => this.updateaddress(e)}>Place Order</button>
                    </ul>
                    </div>
            </div>
        );
    }
}

export default CheckOutForm;