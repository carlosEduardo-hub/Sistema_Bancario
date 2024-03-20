import React from "react";
import "./styles.css";

export const ResumeItem = ({ title, Icon, value }) => {
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

export const ResumeItem2 = ({ title, Icon, value }) => {
  return (
    <div className="container2">
      <header className="header">
        <p className="header-title">{title}</p>
        <Icon className="icon" />
      </header>
      <span className="total">{value}</span>
    </div>
  );
};

export const ResumeItem3 = ({ title, Icon, value }) => {
  return (
    <div className="container3">
      <header className="header">
        <p className="header-title">{title}</p>
        <Icon className="icon" />
      </header>
      <span className="total">{value}</span>
    </div>
  );
};
