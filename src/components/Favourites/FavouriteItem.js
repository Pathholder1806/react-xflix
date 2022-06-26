import React from "react";
import { Link } from "react-router-dom";
import "./FavouriteItem.css";

const FavouriteItem = (props) => {
    return (
        <div className='favourite-item'>
            <Link to={`/video/${props.video._id}`}>
                <img
                    className='favourite-item-image'
                    src={props.video.previewImage}
                    alt='Video thumbnail'
                />
            </Link>

            <div className='favourite-item-description'>
                <a
                    href={`/video/${props.video._id}`}
                    className='favourite-item-title'
                >
                    {props.video.title}
                </a>
                <span className='favourite-item-date'>
                    {props.video.releaseDate}
                </span>
            </div>
            <button
                className='favourite-item-button'
                onClick={() => {
                    props.removeFromFavouritesHandler(props.video._id);
                }}
            >
                Remove from favourite
            </button>
        </div>
    );
};

export default FavouriteItem;
