import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import FavouriteItem from "./FavouriteItem";

import "./Favourites.css";

const Favourites = (props) => {
    return (
        <Fragment>
            <Header showSearch={false} showButton={false} />
            <main className='favourites'>
                <div className='container'>
                    <h1 className='favourites-heading'>Your Favourites!</h1>
                    <hr />

                    <div className='favourite-items'>
                        {props.videos.length === 0 ? (
                            <h2>No Favourites</h2>
                        ) : (
                            props.videos.map((video) => {
                                return (
                                    <FavouriteItem
                                        video={video}
                                        removeFromFavouritesHandler={
                                            props.removeFromFavouritesHandler
                                        }
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Favourites;
