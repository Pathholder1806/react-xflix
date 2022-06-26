import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";
import "./Cards.css";

const Cards = (props) => {
    return (
        <Fragment>
            <section className='cards-section'>
                <div className='cards'>
                    {props.videos.map((item) => {
                        return <Card data={item} />;
                    })}
                </div>
            </section>
        </Fragment>
    );
};

export default Cards;
