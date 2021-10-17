import React from "react";
import "./styles.css";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>WEATHER APP</h1>
        <div className="city">Bangalore</div>
        <div className="city">Delhi</div>
        <div className="city">Mumbai</div>

        <div className="container">
          {/* WEATHER COMPONENT */}
          <div className="weather">
            <div className="container-inner">
              {/* LEFT SIDE CONTENT */}
              <div className="content-inner left-side">
                <span className="primary">Bangalore, Karnataka</span>
                <br />
                <span className="secondary">as of 11:37 AM</span>
                <br />
                <br />

                <span className="temp">26</span>
                <br />
                <br />

                <span className="primary">Haze</span>
                <br />
                <span className="secondary">42% chance of rain</span>
                <br />
              </div>
              {/* RIGHT SIDE CONTENT */}
              <div className="content-inner right-side">
                <span className="primary">79</span>
                <br />
                <span className="secondary">Humidity</span>
                <br />
                <br />

                <span className="primary">28</span>
                <br />
                <span className="secondary">Feels like</span>
                <br />
                <br />

                <span className="primary">0 N</span>
                <br />
                <span className="secondary">wind</span>
                <br />
                <br />
              </div>
            </div>
          </div>

          {/* DETAILS COMPONENT */}
          <div className="details">
            <div className="container-inner">
              {/* LEFT SIDE CONTENT */}
              <div className="content-inner">
                <br />
                <br />

                <span className="primary">0 N</span>
                <br />
                <span className="secondary">Location</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="primary">0 N</span>
                <br />
                <span className="secondary">Time Zone</span>
                <br />
                <br />
              </div>
              {/* RIGHT SIDE CONTENT */}
              <div className="content-inner">
                <br />
                <br />

                <span className="primary">0 N</span>
                <br />
                <span className="secondary">Local Time</span>
                <br />
                <br />
                <br />
                <br />
                <br />

                <span className="primary">0 N</span>
                <br />
                <span className="secondary">Co-ordinates</span>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
