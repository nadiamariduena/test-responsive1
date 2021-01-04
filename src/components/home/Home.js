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
        {images.map((image) => (
          <>
            <div key={image.id} className="img-container">
              <img
                src={image.img1}
                className="img-box-portfolio"
                alt="images"
              />
            </div>
            <h2>
              TEXT <span className="outline">TEXT</span>
            </h2>
          </>
        ))}
      </>
    </React.Fragment>
  );
}

export default Home;
