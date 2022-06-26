import React, { Fragment } from "react";
import "./TagItem.css";

const TagItem = (props) => {
    const tag = props.tag;

    const onClickHandler = () => {
        props.tagChangeHandler(tag.title);
    };

    return (
        <Fragment>
            <div
                className={`tagbar-item ${tag.selected ? "selected" : ""} `}
                onClick={onClickHandler}
            >
                {tag.title}
            </div>
        </Fragment>
    );
};

export default TagItem;
