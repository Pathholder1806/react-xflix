import React, { Fragment } from "react";
import "./Card.css";

const Card = (props) => {
    return (
        <Fragment>
            <div className='card'>
                <img
                    className='card__img'
                    src={props.data.previewImage}
                    alt={`Video: ${props.data.title}`}
                />
                <span className='card__title'>{props.data.title}</span>
                <span className='card__date'>{props.data.releaseDate}</span>
            </div>
        </Fragment>
    );
};

export default Card;
