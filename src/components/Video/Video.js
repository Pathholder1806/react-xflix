import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";

import "./Video.css";

const Video = (props) => {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);
    const [currVideo, setCurrVideo] = useState({});
    const [inFav, setInFav] = useState(false);

    useEffect(() => {
        const getVideoData = async () => {
            const url =
                "https://0d5b6c3e-f50c-459b-bb52-cf7e7c53cc0e.mock.pstmn.io/v1/videos";
            const res = await axios.get(url);
            const videosData = res.data.videos;
            console.log(videosData);

            const videoArr = [];

            for (let i = 0; i < videosData.length; i++) {
                if (videosData[i]._id === id) {
                    setCurrVideo(videosData[i]);
                } else {
                    videoArr.push(videosData[i]);
                }
            }
            setVideos(videoArr);
        };
        getVideoData();

        setInFav(false);

        if (localStorage.getItem("favourites")) {
            const favourites = JSON.parse(localStorage.getItem("favourites"));

            favourites.forEach((ele) => {
                if (ele._id === id) {
                    setInFav(true);
                }
            });
        }
    }, [id]);

    return (
        <Fragment>
            <div className='video-page'>
                <Header showSearch={false} showButton={true} />
                <div className='container'>
                    <iframe src={`https://${currVideo.videoLink}`}></iframe>
                    <div className='video-description'>
                        <span className='video-title'>{currVideo.title}</span>
                        <div className='video-details'>
                            <div className='video-details__left'>
                                <span>{currVideo.contentRating}</span>
                                <span>{currVideo.releaseDate}</span>
                            </div>
                            <div className='video-details__right'>
                                <button
                                    className='like-dislike-button'
                                    onClick={() => {
                                        props.addToFavouritesHandler(currVideo);
                                        setInFav(true);
                                    }}
                                    disabled={inFav ? "true" : ""}
                                >
                                    <ion-icon name='star-outline'></ion-icon>
                                    <span>Add to Favourite</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <Cards videos={videos} />
                </div>
            </div>
        </Fragment>
    );
};

export default Video;
