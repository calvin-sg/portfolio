import React from "react";

import SlideUpWhenVisible from "../../hooks/SlideUpWhenVisible";

const GetInTouch = ({
                        heading,
                        message,
                        email
                    }) => {
    return (
        <>
            <div id="getInTouch" className="target-section jumbotron jumbotron-fluid m-0">
                <SlideUpWhenVisible>
                    <div className="container container-fluid">
                        <h2 className="display-4 pb-3 text-center">{heading}</h2>
                        <p className="lead text-center">
                            <a
                                className="btn btn-outline-dark btn-lg"
                                href="/contact"
                                rel="noreferrer noopener"
                                role="button"
                                aria-label="Contact form button"
                            >
                                <i className="fas fa-envelope"/>{" "}Contact form
                            </a>
                            {" "}
                            <a
                                className="btn btn-outline-dark btn-lg"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.t.me/calvindotsg"
                                role="button"
                                aria-label="Telegram contact"
                            >
                                <i className="fab fab fa-telegram"/> Message me
                            </a>
                        </p>
                        <p className="lead text-center pb-3">
                            {message} {email}.
                        </p>
                    </div>
                </SlideUpWhenVisible>
            </div>
        </>
    );
};

export default GetInTouch;
