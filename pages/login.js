import React, {Component} from "react";
import {connect} from 'react-redux';
import Router from 'next/router'

class Login extends Component{

    ToLogin = () =>{
        this.props.LoginUser(2)
        Router.push('/');
    }
    render(){
        return (
            <div>
                <button onClick={this.ToLogin}>LOGIN</button>
                <form method="POST" action="/checkout">
                    <script type="text/javascript"
                    src="https://dev-kpaymentgateway.kasikornbank.com/ui/v2/kpayment.min.js"
                    data-apikey="pkey_prod_75677dushd74774gdgdgd77d7dhsgfhfghfhgdh"
                    data-amount="74.00"
                    data-currency="THB"
                    data-payment-methods="card"
                    data-name="Your Shop Name"
                    data-mid="401001001001001"
                    >
                    </script>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoginUser : (user_id) => {
            return dispatch({type: 'LOGIN_SUCCESS', user: user_id})
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)