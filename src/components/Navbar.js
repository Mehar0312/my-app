import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    window.onload = () => {
        document.getElementById("inlineRadio1").checked = true;
        document.getElementById("inlineRadio1").disabled = true;
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
            <div className="navbar-brand" href="/">{props.title}</div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                    {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==='light'?'dark':'light'} mode`}</label> */}
                </div>
                
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input mx-2" onClick={props.lightMode} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label mx-1" htmlFor="inlineRadio1">Enable light mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input mx-2" onClick={props.darkMode} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label mx-1" htmlFor="inlineRadio2">Enable dark mode</label>
                </div>
            </div>
        </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
};

// Navbar.defaultProps = {
//     title: "Demo Title",
//     aboutText: "About US"
// }