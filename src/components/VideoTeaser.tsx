import React from "react";
import HomePageLogo from "./HomePageLogo";
function VideoTeaser(props) {
  const titleParts = props.titleParts || [];
  const subtitleParts = props.subtitleParts || [];

  return (
    <section id="hero-23" className="bg--scroll hero-section">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9 col-xl-10">
            <div className="hero-23-txt wow fadeInUp">
              <HomePageLogo logoSrc="/img/logo.png" />

              <h2 className="s-58 w-700">
                {titleParts.map((part, index) =>
                  part.color ? (
                    <span key={index} className={`color--${part.color}`}>
                      {part.text}
                    </span>
                  ) : (
                    <span key={index}>{part.text}</span>
                  )
                )}
              </h2>

              <p className="p-xl">
                {subtitleParts.map((part, index) =>
                  part.color ? (
                    <span key={index} className={`color--${part.color}`}style={{fontWeight: 'bold'}}>
                      {part.text}
                    </span>
                  ) : (
                    <span key={index}>{part.text}</span>
                  )
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="hero-23-img video-preview wow fadeInUp">
              <a className="video-popup1" href={props.videoSrc}></a>
              <img
                className="img-fluid"
                src={props.imageSrc}
                alt="video-preview"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            d="M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default VideoTeaser;
