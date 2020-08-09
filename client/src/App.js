import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Container from "./components/Container/Container.component";
import Col from "./components/Col/Col.component";
import Row from "./components/Row/Row.component";
import DataInputForm from "./components/DataInputForm/DataInputForm.component";
import DataOutput from "./components/DataOutputTable/DataOutput.component.jsx";
import Title from "./components/Title/Title.component";
import backgroundImage from "./Assets/backgroundImage.png";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Row>
        <Title title="Word Counter" size="lg" />
      </Row>
      <Row>
        <DataInputForm />
        <DataOutput />
      </Row>
    </div>
  );
}

export default App;
