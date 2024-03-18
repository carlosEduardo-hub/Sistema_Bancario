import React from "react";
import "./styles.css";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <div className="container">
      <header className="header">
        <p className="header-title">{title}</p>
        <Icon className="icon" />
      </header>
      <span className="total">{value}</span>
    </div>
  );
};

export default ResumeItem;
