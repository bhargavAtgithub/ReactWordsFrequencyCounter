import React from "react";

import "./Title.styles.scss";

const Title = ({ title, size }) => {
  return <span className={`title ${size}`}>{title}</span>;
};

export default Title;
