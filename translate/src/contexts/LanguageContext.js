import React from "react";

const LanguageContext = React.createContext("English");
export class LanguageStore extends React.Component {
  state = { language: "English" };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
