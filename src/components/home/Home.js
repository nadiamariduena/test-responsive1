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
            <div className="quote" key={image.id}>
              <img src={image.img1} className="img-container" alt={image.alt} />
              <h2>
                TEXT <span className="outline">TEXT</span>
              </h2>
            </div>
          );
        })}
      </>
    </React.Fragment>
  );
}

export default Home;
