import { NavLink, withRouter } from 'react-router-dom'

const _AppHeader = () => {
    return (
        <div className="app-header container">
            <h1>Mr.bitcoin</h1>
            <ul>
                <li><NavLink exact to="/" activeClassName="active-nav">Home</NavLink></li>
                <li><NavLink exact to="/contacts" activeClassName="active-nav">Conatacs</NavLink></li>
                <li><NavLink exact to="/statistic" activeClassName="active-nav">Statistic</NavLink></li>
                <li><NavLink exact to="/signup" activeClassName="active-nav">signup</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)
