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
  onSelectLanguage: (language: "ru" | "en" | null) => void;
};

type MainState = {
  currentPage: number;
};

class Main extends Component<MainProps, MainState> {
  state: MainState = {
    currentPage: 1,
  };

  componentDidMount() {
    const selectedLanguage = localStorage.getItem("selectedLanguage") as
      | "ru"
      | "en"
      | null;
    
    if (selectedLanguage !== null) {
      this.props.onSelectLanguage(selectedLanguage);
    }
  }

  componentDidUpdate(prevProps: MainProps) {
    if (
      prevProps.selectedLanguage !== this.props.selectedLanguage ||
      prevProps.data !== this.props.data
    ) {
      this.goToPage(1);
    }
  }

  goToPage = (page: number) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { data, selectedLanguage } = this.props;
    const { currentPage } = this.state;
    const reviewsPerPage = 10;

    const reviews = selectedLanguage === "ru" ? data.ru : data.en;

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const displayedReviews = reviews.slice(startIndex, endIndex);
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    return (
      <main className="main">
        <div className="reviews">
          {displayedReviews.map((review, index) => (
            <div className="review" key={index}>
              <div className="review-header">
                <div className="review-date">{review.date}</div>
                <div className="review-name">{review.name}</div>
              </div>
              <div className="review-text">{review.review}</div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => this.goToPage(currentPage - 1)}>←</button>
          )}

          {currentPage > 2 && (
            <>
              <button onClick={() => this.goToPage(1)}>1</button>
              {currentPage !== 3 && <span>...</span>}
            </>
          )}

          <button className="active" onClick={() => this.goToPage(currentPage)}>
            {currentPage}
          </button>

          {currentPage < totalPages - 1 && (
            <>
              {currentPage !== totalPages - 2 && <span>...</span>}
              <button onClick={() => this.goToPage(totalPages)}>
                {totalPages}
              </button>
            </>
          )}

          {currentPage < totalPages && (
            <button onClick={() => this.goToPage(currentPage + 1)}>→</button>
          )}
        </div>
      </main>
    );
  }
}

export default Main;