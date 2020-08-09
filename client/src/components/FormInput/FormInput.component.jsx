import React, { userState } from "react";

import "./FormInput.styles.scss";
import { useState } from "react";

const FormInput = ({ title }) => {
  const [spinner, setSpinner] = useState(true);
  if (spinner) {
    return (
      <div className="form-input-design">
        <div className="form-input">
          <input
            type="number"
            className="text-input"
            placeholder="Enter N"
            className="inputValue"
          />
        </div>
      </div>
    );
  } else {
    return <div className="loadingSpinner"></div>;
  }
};

export default FormInput;
