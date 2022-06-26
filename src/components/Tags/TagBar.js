import React, { Fragment } from "react";
import "./TagBar.css";
import TagItem from "./TagItem";

const TagBar = (props) => {
    return (
        <Fragment>
            <section className='tagbar'>
                {props.tags.map((item) => {
                    return (
                        <TagItem
                            tag={item}
                            tagChangeHandler={props.tagChangeHandler}
                        />
                    );
                })}
            </section>
        </Fragment>
    );
};

export default TagBar;
