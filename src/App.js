import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header/Header";
import TagBar from "./components/Tags/TagBar";
import Cards from "./components/Cards/Cards";

function App() {
    const [videos, setVideos] = useState([]);
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

    const [ageTags, setAgeTags] = useState([
        {
            title: "All age group",
            selected: true,
        },
        {
            title: "7+",
            selected: false,
        },
        {
            title: "10+",
            selected: false,
        },
        {
            title: "13+",
            selected: false,
        },
        {
            title: "18+",
            selected: false,
        },
    ]);

    useEffect(() => {
        const getData = async () => {
            const url =
                "https://0d5b6c3e-f50c-459b-bb52-cf7e7c53cc0e.mock.pstmn.io/v1/videos";
            const res = await axios.get(url);
            setVideos(res.data.videos);
        };
        getData();
    }, []);

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

    const ageTagChangeHandler = (tagname) => {
        let newTagArr = [...ageTags];
        for (let i = 0; i < newTagArr.length; i++) {
            if (tagname === newTagArr[i].title) {
                newTagArr[i].selected = true;
            } else {
                newTagArr[i].selected = false;
            }
        }

        setAgeTags(newTagArr);
    };

    return (
        <div className='App'>
            <Header />
            <TagBar tags={genreTags} tagChangeHandler={genreTagChangeHandler} />
            <TagBar tags={ageTags} tagChangeHandler={ageTagChangeHandler} />
            <Cards videos={videos} />
        </div>
    );
}

export default App;
