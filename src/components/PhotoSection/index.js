import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      <iframe
        title="Pre-Wedding Bình & Vân"
        width="100%"
        height="360px"
        src="https://www.youtube.com/embed/75w39OY7N-k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">The Moments</h2>
              <p className="sub-title">
                Một khi đã nắm chặt tay thì sẽ không bao giờ buông. Một khi đã yêu thương hết lòng thì sẽ không dễ dàng từ bỏ. Bởi vì… tìm được một hạnh phúc quá khó. Nó phải trả giá bằng niềm đau, bởi những giọt nước mắt và thời gian. Nhớ nhé và phải nắm thật chặt em nhé!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderYoutubeVideo()}</div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
