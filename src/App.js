import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
} from "react-router-dom";

import Home from "./components/Home/Home";
import Video from "./components/Video/Video";
import Favourites from "./components/Favourites/Favourites";

function App() {
    const [videos, setVideos] = useState([]);
    const [searchedVideos, setSearchedVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [genreTags, setGenreTags] = useState([
        {
            title: "All Genre",
            selected: true,
        },
        {
            title: "Movies",
            selected: false,
        },
        {
            title: "Sports",
            selected: false,
        },
        {
            title: "Comedy",
            selected: false,
        },
        {
            title: "Lifestyle",
            selected: false,
        },
    ]);

    useEffect(() => {
        const getData = async () => {
            const url =
                "https://0d5b6c3e-f50c-459b-bb52-cf7e7c53cc0e.mock.pstmn.io/v1/videos";
            const res = await axios.get(url);
            setVideos(res.data.videos);
            setSearchedVideos(res.data.videos);
            setFilteredVideos(res.data.videos);
        };
        getData();

        if (localStorage.getItem("favourites")) {
            const favStorage = JSON.parse(localStorage.getItem("favourites"));
            setFavourites(favStorage);
        }
    }, []);

    useEffect(() => {
        let selectedTag = "";

        genreTags.forEach((tag) => {
            if (tag.selected) {
                selectedTag = tag.title;
            }
        });

        if (selectedTag === "All Genre") {
            setFilteredVideos(searchedVideos);
            return;
        }

        let filtered = [];

        filtered = searchedVideos.filter((video) => {
            return video.genre === selectedTag;
        });

        setFilteredVideos(filtered);
    }, [genreTags, searchedVideos]);

    const genreTagChangeHandler = (tagname) => {
        let newTagArr = [...genreTags];
        for (let i = 0; i < newTagArr.length; i++) {
            if (tagname === newTagArr[i].title) {
                newTagArr[i].selected = true;
            } else {
                newTagArr[i].selected = false;
            }
        }

        setGenreTags(newTagArr);
    };

    const searchHandler = (search) => {
        if (!search || search.length === 0) {
            setSearchedVideos(videos);
            return;
        }

        let newArr = [];

        newArr = videos.filter((video) => {
            return video.title.includes(search);
        });
        setSearchedVideos(newArr);
    };

    const addToFavouritesHandler = (item) => {
        let newArr = [...favourites];
        newArr.push(item);

        setFavourites(newArr);
        localStorage.setItem("favourites", JSON.stringify(newArr));
    };

    const removeFromFavouritesHandler = (id) => {
        let newArr = favourites.filter((item) => {
            return item._id !== id;
        });
        setFavourites(newArr);
        localStorage.setItem("favourites", JSON.stringify(newArr));
    };

    return (
        <Router>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <Home
                            searchHandler={searchHandler}
                            genreTags={genreTags}
                            genreTagChangeHandler={genreTagChangeHandler}
                            filteredVideos={filteredVideos}
                        />
                    }
                />
                <Route
                    path='/video/:id/'
                    element={
                        <Video
                            addToFavouritesHandler={addToFavouritesHandler}
                        />
                    }
                />
                <Route
                    exact
                    path='/favourites'
                    element={
                        <Favourites
                            videos={favourites}
                            removeFromFavouritesHandler={
                                removeFromFavouritesHandler
                            }
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
