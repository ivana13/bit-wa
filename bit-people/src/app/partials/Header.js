import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { handleRefresh } = props;
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo"><i className="material-icons"></i>Bit People</a>
                <ul className="right hide-on-med-and-down">
                <li><a onClick><i class="material-icons">vm</i></a></li>
                    <li><a><i className="material-icons">search</i></a></li>
                    <li><a onClick={handleRefresh}><i className="material-icons">refresh</i></a></li>

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


export { Header }