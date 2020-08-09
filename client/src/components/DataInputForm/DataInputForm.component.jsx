import React, { useEffect } from "react";

import Container from "../Container/Container.component";
import Col from "../Col/Col.component";

import "./DataInputForm.styles.scss";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import Title from "../Title/Title.component";
import CheckPoints from "../CheckPoints/CheckPoints.component";

const DataFormInput = () => {
  useEffect(async () => {
    var sortedWordsData = await fetch(`http://localhost:3001/ttt/data`)
      .then((data) => console.log(data.text()))
      .catch((err) => console.log("There was some problem", err));
  });

  return (
    <Container>
      <Col>
        <div className="data-form-input">
          <Title size="sm" title={"Word Counter"} />
          <FormInput title="Number of Words" />
          <CustomButton />
          <CheckPoints />
        </div>
      </Col>
    </Container>
  );
};

export default DataFormInput;
