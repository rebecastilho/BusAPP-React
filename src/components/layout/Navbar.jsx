import React from 'react';

class Navbar extends React.Component {
render() {
    return (
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark mb-3">
        <a className="navbar-brand" href="#">BusApp</a>

        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto  ">
                <li className="nav-item">
                    <a className="nav-link" href="/linhas">Linhas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/usuarios">Usuários</a>
                </li>
                
                <li className="nav-item">
                    <a className="nav-link" href="/sac">SAC</a>
                </li>
            </ul>
        </div>
        </nav>
    )
};

}

export default Navbar;