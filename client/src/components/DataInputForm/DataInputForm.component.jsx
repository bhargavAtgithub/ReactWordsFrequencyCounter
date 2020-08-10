import React, { useEffect } from "react";

import Container from "../Container/Container.component";
import Col from "../Col/Col.component";

import "./DataInputForm.styles.scss";

import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import Title from "../Title/Title.component";
import CheckPoints from "../CheckPoints/CheckPoints.component";

import { setData } from "../../redux/action.types";
import { connect } from "react-redux";

const DataFormInput = () => {
  useEffect(async () => {
    var sortedWordsData = new Promise((resolve, reject) => {
      resolve(fetch(`http://localhost:3001/ttt/data`));
    });

    sortedWordsData.then((data) =>
      data.text().then((text) => console.log(text))
    );
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

// const mapDispatchToProps = (dispatch) => ({
//   setData: (data) => dispatch(setData(data)),
// });

// export default connect(null, mapDispatchToProps)(DataFormInput);
export default DataFormInput;
