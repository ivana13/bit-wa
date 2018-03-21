import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {

    return (
        <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo"><i className="material-icons"></i>Bit People</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
      
          </ul>
        </div>
      </nav>
    )

}


Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "App"
}


export {Header}