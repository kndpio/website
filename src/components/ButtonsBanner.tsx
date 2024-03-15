import React from "react";

function ButtonsBanner(props) {
  return (
    <section id="banner-7" className="banner-section">
      <div className="banner-overlay py-100">
        <div className="container">
          <div className="banner-7-wrapper">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="banner-7-txt text-center">
                  <div className="btns-group">
                    <a
                      href={props.firstButtonUrl}
                      className="btn r-04 btn--theme hover--theme"
                    >
                      {props.firstButton}
                    </a>
                    <a
                      href={props.secondButtonUrl}
                      className="btn r-04 btn--tra-black hover--theme"
                    >
                      {props.secondButton}
                    </a>
                  </div>

                  <p className="btn-txt ico-15">
                    {props.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ButtonsBanner;
