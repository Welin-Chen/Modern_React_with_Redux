import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "English" ? "Name" : "名字";
    return (
      <div className="field">
        <label className="ui label">{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
