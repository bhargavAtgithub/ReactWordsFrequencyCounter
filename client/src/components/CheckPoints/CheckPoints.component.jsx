import React from "react";

import "./CheckPoints.styles.scss";

import CheckBox from "../CheckBox/CheckBox.component";

const CheckPoints = () => {
  return (
    <div className="check-points">
      <CheckBox checkBoxName="initiated" checked={true} />
      <CheckBox checkBoxName="Connected to ttt file" checked={true} />
      <CheckBox checkBoxName="received file from ttt" checked={true} />
      <CheckBox checkBoxName="processing" checked={false} />
      <CheckBox checkBoxName="Done!" checked={false} />
    </div>
  );
};

export default CheckPoints;
