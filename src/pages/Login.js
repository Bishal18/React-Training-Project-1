//Apoorva

import React from 'react'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: props.authenticated,
            fromLocation: props.location.state ? props.location.state.from : '',
            username: '',
            password: '',
            errorMsg: ''
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.authenticated !== prevState.authenticated) {
            return { authenticated: nextProps.authenticated };
        }
        else {
            return null;
        }
    }

    ontxtEnter(event) {
        const target = event.target;
        const name = target.name;
        this.setState(
            {
                [name]: event.target.value
            }
        );
    }

   

    onLogin(event) {
        this.props.checklogin(this.state.username, this.state.password);
    }

    render() {
        if (this.state.authenticated) {
            console.log("Render",this.state.username);
            return (<Redirect to={{
                pathname: '/',
                state: { username: this.state.username }
            }}  />);
        }
        else {
            return (
                <div>
                    <h2>Login</h2>
                    <br/>
                        <div className="row"><div className="col-md-1"><label>Username </label></div>
                            <div className="col-md-1"><input type="text" name="username" onChange={(e) => this.ontxtEnter(e)} /></div>
                        </div>
                        <div className="row"><div className="col-md-1"><label>Password </label></div>
                            <div className="col-md-1"><input type="password" name="password" onChange={(e) => this.ontxtEnter(e)} />
                            </div>
                        </div> <br/> <br/>
                        <div className="row"><div className="col-md-2"> <input type="button"  value="Login" onClick={(e) => this.onLogin(e)} /></div>
                        </div>
                        <br/>
                        <div className="row">
                            {
                                this.state.errorMsg ? (
                                    <div>
                                        {this.state.errorMsg}</div>
                                ) : ''
                            }
                        </div>
                </div>
            );
        }
    }
}

export default Login;
