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
              <h2 className="main-font">Wedding</h2>
              <h3 className="sub-title hs">HÔN LỄ ĐƯỢC TỔ CHỨC VÀO LÚC 11H30</h3>
              <h4 className="sub-title hs">CHỦ NHẬT, NGÀY 12 THÁNG 02 NĂM 2023</h4>
              <p className="info">(Nhằm ngày 22 tháng 01 năm Quý Mão)</p>
              <h4 className="sub-title hs">TẠI SẢNH EDEN - Trung tâm hội nghị tiệc cưới EROS PALACE</h4>
              <p className="info">15 Đồng Khởi, P. Tân Tiến, Biên Hòa, Đồng Nai</p>
              <p className="info">Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi</p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Duong Xuan Binh</h3>
                <p className="parent-name parent-name__top">
                  Bố: Dương Xuân Huệ <br />
                  Mẹ: Phạm Thị Hương <br />
                  Trảng Dài, Biên Hòa, Đồng Nai
                </p>
                {/*<img src={Groom} alt="MoneyQR" width="120" height="120"/>*/}
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
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Hoang Thi Mong Van</h3>
                <p className="parent-name">
                  Bố: Hoàng Quốc Thống <br />
                  Mẹ: Phạm Thị Thị <br />
                  Phú Ngọc, Định Quán, Đồng Nai
                </p>
                {/*<img src={Bride} alt="MoneyQR" width="120" height="120"/>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*{!isInvitation ? (*/}
      {/*  <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>*/}
      {/*    <div className="container">*/}
      {/*      <div className="row">*/}
      {/*        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">*/}
      {/*          <h2 className="main-font">Covid-19</h2>*/}
      {/*          <p className="info">*/}
      {/*            Liên quan đến tình trạng các vấn đề dịch bệnh hiện tại, và không gian tổ chức của sự kiện của chúng tôi, đề cập đến các nguyên tắc Bộ Y tế cụ thể là áp đặt các hạn chế về khoảng cách và số lượng khách mời.*/}
      {/*          </p>*/}
      {/*          <p className="info">Vì vậy, với tất cả sự khiêm tốn, chúng tôi chân thành xin lỗi nếu chúng tôi không thể mời anh/chị/em tới dự ngày hạnh phúc của chúng tôi.*/}
      {/*          </p>*/}
      {/*          <p className="info">Trân trọng.*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : null}*/}
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
