import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";

import "./Video.css";

const Video = () => {
    const { id } = useParams();

    const [videos, setVideos] = useState([]);
    const [currVideo, setCurrVideo] = useState({});

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
                                <button className='like-dislike-button'>
                                    <ion-icon name='thumbs-up-outline'></ion-icon>
                                </button>
                                <button className='like-dislike-button'>
                                    <ion-icon name='thumbs-down-outline'></ion-icon>
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
