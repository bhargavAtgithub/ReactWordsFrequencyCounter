import React from "react";

import "./CheckPoints.styles.scss";

import CheckBox from "../CheckBox/CheckBox.component";

const CheckPoints = () => {
  return (
    <div className="check-points">
      <CheckBox checkBoxName="initiated" checked={false} />
      <CheckBox checkBoxName="Connected to ttt file" checked={false} />
      <CheckBox checkBoxName="received file from ttt" checked={false} />
      <CheckBox checkBoxName="processing" checked={false} />
      <CheckBox checkBoxName="Done!" checked={false} />
    </div>
  );
};

export default CheckPoints;
