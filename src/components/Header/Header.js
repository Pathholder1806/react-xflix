import React, { Fragment } from "react";
import logo from "./img/Logo.png";
import uploadLogo from "./img/upload_24px_outlined.png";

import "./Header.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <a href='#'>
                    <img className='header__logo' src={logo} alt='XFlix logo' />
                </a>
                <form className='search-form'>
                    <input
                        className='search-form__field'
                        id='search-form-field'
                        placeholder='Search'
                    ></input>
                    <button className='search-form__button' type='submit'>
                        <ion-icon name='search-outline'></ion-icon>
                    </button>
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
