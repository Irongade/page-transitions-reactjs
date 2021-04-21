import * as React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";

// images 
import YasmeenImage from "../images/yasmeen.webp"
import CompressedImage from "../images/compressed-image.jpg"

const Home = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/model/yasmeen-tariq`}>
                  <ProgressiveImage
                    src={YasmeenImage}
                    placeholder={CompressedImage}>
                    {(src) => <img src={src} alt='Yasmeen Tariq' />}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <div className='information'>
              <div className='title'>Yasmeen Tariq</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Home;