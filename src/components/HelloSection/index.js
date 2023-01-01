import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '03 Oktober 2020, HARRIS Hotel Sentraland, Semarang' : 'Sabtu, 03 Oktober 2020';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Hoàng Thị Mộng Vân</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Totok Somo Dipoyono <br />& Ibu Setyo Listiani
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Indra Kusuma, S.Kom.</h3>
                <p className="parent-name">
                  Putra Bapak Bunari <br />& Ibu Suratun
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isInvitation ? (
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Covid-19</h2>
                <p className="info">
                  Liên quan đến tình trạng các vấn đề dịch bệnh hiện tại, và không gian tổ chức của sự kiện của chúng tôi, đề cập đến các nguyên tắc Bộ Y tế cụ thể là áp đặt các hạn chế về khoảng cách và số lượng khách mời.
                </p>
                <p className="info">Vì vậy, với tất cả sự khiêm tốn, chúng tôi chân thành xin lỗi nếu chúng tôi không thể mời anh/chị/em tới dự ngày hạnh phúc của chúng tôi.
                </p>
                <p className="info">Trân trọng.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
