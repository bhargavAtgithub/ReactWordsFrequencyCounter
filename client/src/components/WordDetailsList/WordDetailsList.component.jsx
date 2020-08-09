import React from "react";

import "./WordDetailsList.styles.scss";

import Col from "../Col/Col.component";

import WordDetails from "../WordDetails/WordDetails.component";

const WordDetailsList = () => {
  return (
    <div className="word-details-list">
      <Col>
        <WordDetails word="Complete data" />
        <WordDetails position="1" word="hello" frequency="30" />
        <WordDetails position="2" word="world" frequency="20" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
        <WordDetails position="3" word="Wassup?" frequency="10" />
      </Col>
    </div>
  );
};

export default WordDetailsList;
