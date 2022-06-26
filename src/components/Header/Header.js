import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./img/Logo.png";
import uploadLogo from "./img/upload_24px_outlined.png";

import "./Header.css";

const Header = (props) => {
    const [search, setSearch] = useState("");

    useEffect(() => {
        props.searchHandler(search);
    }, [search]);

    return (
        <Fragment>
            <header className='header'>
                <Link to='/'>
                    <img className='header__logo' src={logo} alt='XFlix logo' />
                </Link>
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
                <a className='upload-button'>
                    <img
                        className='upload-button__logo'
                        src={uploadLogo}
                        alt='Upload logo'
                    ></img>
                    <span className='upload-button__text'>Upload</span>
                </a>
            </header>
        </Fragment>
    );
};

export default Header;
