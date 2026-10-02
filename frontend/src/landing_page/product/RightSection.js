import React from "react";

function RightSection({productName, productDescription, learnMore, imageURL}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className="">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{color: "rgb(0, 128, 255)" }}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6 " >
          <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
