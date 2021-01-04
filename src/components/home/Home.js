import React from "react";
import Header from "../navigation/Header";
import images from "../../jsonData/images.json";
//

function Home() {
  return (
    <React.Fragment>
      <Header />

      <div className="box1">
        <h1>Home</h1>
      </div>
      <>
        {images.map((image, index) => {
          return (
            <div className="container-quote" key={image.id}>
              <div className="quote">
                <img
                  className="img-container"
                  src={image.img1}
                  alt={image.alt}
                />
                <h2>
                  TEXT <span className="outline">TEXT</span>
                </h2>
              </div>
            </div>
          );
        })}
      </>
    </React.Fragment>
  );
}

export default Home;
