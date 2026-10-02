import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <button type="button" className="support-link">
          Track Tickets
        </button>
      </div>

      <section id="supportWrapperTwo">
        <div className="row p-5 m-3">
          <div className="col-6 p-4">
            <h1 className="fs-3 mb-3">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              placeholder="Eg. how do I activate F&O"
              className="mb-3"
            />

            <br />

            <button type="button" className="support-link">
              Track account opening
            </button>

            <button type="button" className="support-link">
              Track segment activation
            </button>

            <button type="button" className="support-link">
              Intraday margins
            </button>

            <button type="button" className="support-link">
              Kite user manual
            </button>
          </div>

          <div className="col-1"></div>

          <div className="col-5">
            <h1 className="fs-3">Featured</h1>

            <ol>
              <li>
                <button type="button" className="support-link">
                  Current Takeovers and Delisting - January 2024
                </button>
              </li>

              <li>
                <button type="button" className="support-link">
                  Latest Intraday leverages - MIS & CO
                </button>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
