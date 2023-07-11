import React, { Component } from "react";

type Review = {
  name: string;
  review: string;
  date: string;
};

type MainProps = {
  data: {
    ru: Review[];
    en: Review[];
  };
  selectedLanguage: "ru" | "en" | null;
};

class Main extends Component<MainProps> {
  render() {
    const { data, selectedLanguage } = this.props;
    const reviews = selectedLanguage
      ? data[selectedLanguage]
      : [...data.ru, ...data.en];

    return (
      <main className='main'>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div className='review' key={index}>
              <div className="date case">{review.date}</div>
              <div className="name case">{review.name}</div>
              <div className="text case">{review.review}</div>
            </div>
          ))}
          </div>
      </main>
    );
  }
}

export default Main;
