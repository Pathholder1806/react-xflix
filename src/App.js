import React, { useState } from "react";

import Header from "./components/Header/Header";
import TagBar from "./components/Tags/TagBar";

function App() {
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
        </div>
    );
}

export default App;
