import React, { Component, useState } from 'react';
import data from "../data.json"

let key: number = 0

class Main extends Component {
    render() {
        return (
          <div className="main">
            <div className="reviews">
              {data.ru.map((elem) => (
                <div className="review" key={(key += 1)}>
                  <div className="date case">{elem.date}</div>
                  <div className="name case">{elem.name}</div>
                  <div className="text case">{elem.review}</div>
                </div>
              ))}
            </div>
          </div>
        );
    }
}

export default Main;