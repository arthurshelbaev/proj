import React, { useState, useEffect } from 'react';

function Clock () {
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
      <div className="hours block">
        {hours < 10 ? "0" + hours : hours}
      </div>
      :
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

class Header extends React.Component {
    render() {
        return (
            <div className="header_wrapper">
                <div className="logo_case">
                    <img className='logo' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3247781/javascript-icon-md.png" alt="Logo" />
                </div>
                <Clock />
            </div>
        );
    }
};
export default Header;