import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";

import "./Header.css";

const Header = (props) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        props.searchHandler && props.searchHandler(search);
    }, [search]);

    return (
        <Fragment>
            <header className='header'>
                <Link to='/'>
                    <img className='header__logo' src={logo} alt='XFlix logo' />
                </Link>
                {props.showSearch && (
                    <form className='search-form'>
                        <input
                            className='search-form__field'
                            id='search-form-field'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            autoComplete='off'
                        ></input>
                    </form>
                )}
                {props.showButton && (
                    <Link to='/favourites' className='favourites-button'>
                        <ion-icon name='star-outline'></ion-icon>
                        <span className='favourites-button__text'>
                            Favourites
                        </span>
                    </Link>
                )}
            </header>
        </Fragment>
    );
};

export default Header;
