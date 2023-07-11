import React, { Component, ChangeEvent, useEffect, useState } from "react";

type HeaderProps = {
  onSelectLanguage: (language: "ru" | "en" | null) => void;
};

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="clock">
      <div className="hours block">{hours < 10 ? "0" + hours : hours}</div>:
      <div className="minutes block">
        {minutes < 10 ? "0" + minutes : minutes}
      </div>
      :
      <div className="seconds block">
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
    </div>
  );
}

class Header extends Component<HeaderProps> {
  handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as "ru" | "en" | "";
    this.props.onSelectLanguage(selectedLanguage || null);
  };

  render() {
    return (
        <header className="header_wrapper">
          <div className="logo_case">
            <img
              className="logo"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3247781/javascript-icon-md.png"
              alt="Logo"
            />
          </div>
          <Clock />
          <select onChange={this.handleLanguageChange}>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </header>
    );
  }
}

export default Header;
