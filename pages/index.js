import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {connect} from 'react-redux';
import React, {Component} from "react";

class Home extends Component {

  constructor(props){
    super(props)
  }
  render(){
    const {isLogin} = this.props
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {isLogin ? 
        <h3>Login!!</h3> : 
        <div>
          <p>Not Login</p>
          <Link href="/login">
          <a>login!</a>
        </Link>
        </div>}
  
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    isLogin: state.isLogin,
    user: state.user
  }
}

export default connect(mapStateToProps,null)(Home)
