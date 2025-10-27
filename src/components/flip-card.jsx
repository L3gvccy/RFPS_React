import React from "react";

export default function FlipCard({ name, imgSrc, imgAlt, backContent, children }) {
    return (
        <section className="direction col-md-12 col-lg-6 col-xl-4 p-3">
            <div className="border border-2 rounded p-3">
                    <h4 className="text-center">{name}</h4>
                <div className="flip-card">
                        <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img
                            src={imgSrc}
                            alt={imgAlt}
                            tabIndex="0"
                            width="300px"
                        />
                        </div>
                        <div className="flip-card-back">
                            <p>
                                {backContent}
                            </p>
                        </div>
                        </div>
                    </div>
                                
                    {children}
                </div>
            </section>
    );
}