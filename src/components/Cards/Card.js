import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
    return (
        <Fragment>
            <Link to={`/video/${props.data._id}`} className='card'>
                <img
                    className='card__img'
                    src={props.data.previewImage}
                    alt={`Video: ${props.data.title}`}
                />
                <span className='card__title'>{props.data.title}</span>
                <span className='card__date'>{props.data.releaseDate}</span>
            </Link>
        </Fragment>
    );
};

export default Card;
