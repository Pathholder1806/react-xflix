import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "../Header/Header";

import "./Favourites.css";

const Favourites = () => {
    const video = {
        votes: {
            upVotes: 0,
            downVotes: 0,
        },
        previewImage: "https://i.ytimg.com/vi/kd2KEHvK-q8/mqdefault.jpg",
        viewCount: 20,
        _id: "60331f421f1d093ab5424480",
        videoLink: "youtube.com/embed/kd2KEHvK-q8",
        title: "The Vanishing of Flight 370",
        genre: "Movies",
        contentRating: "12+",
        releaseDate: "14 Apr 2019",
    };

    return (
        <Fragment>
            <Header showSearch={false} showButton={false} />
            <main className='favourites'>
                <div className='container'>
                    <h1 className='favourites-heading'>Your Favourites!</h1>
                    <hr />

                    <div className='favourite-items'>
                        <div className='favourite-item'>
                            <Link to={`/video/${video._id}`}>
                                <img
                                    className='favourite-item-image'
                                    src={video.previewImage}
                                    alt='Video thumbnail'
                                />
                            </Link>

                            <div className='favourite-item-description'>
                                <a
                                    href={`/video/${video._id}`}
                                    className='favourite-item-title'
                                >
                                    {video.title}
                                </a>
                                <span className='favourite-item-date'>
                                    {video.releaseDate}
                                </span>
                            </div>
                            <button className='favourite-item-button'>
                                Remove from favourite
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Favourites;
