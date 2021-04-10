import { NavLink, withRouter } from 'react-router-dom'
import React, { Component } from 'react'

export  class _AppHeader extends Component {
    // logout = () =>{
    //    sessionStorage.setItem('loggedinUser',null)
    //    this.props.history.push('/signup')
    // }
    render(){
        // const loggedinUser = sessionStorage.getItem('loggedinUser');
        return (
            <div className="app-header container">
                <h1>Mr.bitcoin</h1>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                    <li><NavLink exact to="/contacts" activeClassName="active-nav">Conatacs</NavLink></li>
                    <li><NavLink exact to="/statistic" activeClassName="active-nav">Statistic</NavLink></li>
                    <li><NavLink exact to="/signup" activeClassName="active-nav">signup</NavLink></li>
                    {/* {!loggedinUser && <li><NavLink exact to="/signup" activeClassName="active-nav">signup</NavLink></li>} */}
                    {/* {loggedinUser && <button onClick={this.logout}>logout</button>} */}
                </ul>
            </div>

        )
    }
}

export const AppHeader = withRouter(_AppHeader)
