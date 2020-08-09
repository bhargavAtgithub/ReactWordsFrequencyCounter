import React from "react";

import "./CheckBox.styles.scss";

import Row from "../Row/Row.component";

const CheckBox = ({ checkBoxName, checked }) => {
  return (
    <Row>
      <input
        className="checkbox"
        type="checkbox"
        name={checkBoxName}
        checked={checked}
      />
      <label className="checkbox-label">{checkBoxName}</label>
    </Row>
  );
};

export default CheckBox;
