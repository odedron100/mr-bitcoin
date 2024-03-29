import { NavLink, withRouter } from 'react-router-dom'
import React, { Component } from 'react'

export  class _AppHeader extends Component {
    state = {
        toggleNav:false,
    }
    logout = () =>{
       sessionStorage.setItem('loggedinUser',null)
       this.props.history.push('/signup')
    }
    toggleNavbar = () =>{
        this.setState({toggleNav:!this.state.toggleNav})
    }
    render(){
        const loggedinUser = JSON.parse(sessionStorage.getItem('loggedinUser'));
        const {toggleNav} = this.state;
        let navClass = toggleNav ? 'open_navbar' : '';
        return (
            <section className="app-header-container">
                <div className="app-header container">
                    <h1>Mr.bitcoin</h1>
                    <div className="bars" onClick={this.toggleNavbar}>
                        <i className="fas fa-bars"></i>
                    </div>
                    <ul className={navClass}>
                        {loggedinUser ?
                        <>
                        <li><NavLink exact to="/" activeClassName="active-nav" onClick={this.toggleNavbar}>Home</NavLink></li>
                        <li><NavLink exact to="/contacts" activeClassName="active-nav" onClick={this.toggleNavbar}>Conatacs</NavLink></li>
                        <li><NavLink exact to="/statistic" activeClassName="active-nav" onClick={this.toggleNavbar}>Statistic</NavLink></li>
                        <li className="logout" onClick={this.logout}>Logout</li>
                        </> : <li><NavLink exact to="/signup" activeClassName="active-nav" onClick={this.toggleNavbar}>Sign Up</NavLink></li>}

                    </ul>
                </div>
            </section>

        )
    }
}

export const AppHeader = withRouter(_AppHeader)
