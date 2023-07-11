import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import data from "../data.json";

type Language = "ru" | "en";

type Review = {
    name: string;
    review: string;
    date: string;
};

type Data = {
  ru: Review[];
  en: Review[];
};

type AppState = {
  selectedLanguage: Language | null;
};

class App extends Component<{}, AppState> {
  state: AppState = {
    selectedLanguage: null,
  };

  handleLanguageChange = (language: Language | null) => {
    this.setState({ selectedLanguage: language });
  };

  render() {
    const { selectedLanguage } = this.state;

    return (
      <div>
        <Header onSelectLanguage={this.handleLanguageChange} />
        <Main data={data as Data} selectedLanguage={selectedLanguage} />
      </div>
    );
  }
}

export default App;
