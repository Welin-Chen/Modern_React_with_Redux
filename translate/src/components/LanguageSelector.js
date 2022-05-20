import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select Language:
        <i
          className="flag us"
          onClick={() => {
            this.context.onLanguageChange("English");
          }}
        />
        <i
          className="flag tw"
          onClick={() => {
            this.context.onLanguageChange("Taiwan");
          }}
        />
      </div>
    );
  }
}

export default LanguageSelector;
