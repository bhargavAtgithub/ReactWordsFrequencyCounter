import React from "react";

import "./WordDetails.styles.scss";

const WordDetails = ({ position, word, frequency }) => {
  return (
    <div className="word-details">
      <div className="word-position">
        <span>{position}</span>
      </div>
      <div className="word">
        <span>{word}</span>
      </div>
      <div className="word-frequency">
        <span>{frequency}</span>
      </div>
    </div>
  );
};

export default WordDetails;
