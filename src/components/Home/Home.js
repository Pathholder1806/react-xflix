import React, { Fragment } from "react";

import Header from "../Header/Header";
import TagBar from "../Tags/TagBar";
import Cards from "../Cards/Cards";

const Home = (props) => {
    const { searchHandler, genreTags, genreTagChangeHandler, filteredVideos } =
        props;

    return (
        <Fragment>
            <Header searchHandler={searchHandler} />
            <TagBar tags={genreTags} tagChangeHandler={genreTagChangeHandler} />
            <Cards videos={filteredVideos} />
        </Fragment>
    );
};

export default Home;
