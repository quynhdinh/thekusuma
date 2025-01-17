import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="LỄ NẠP TÀI" time="9:00" date="Ngày 12/02/2023 (Dương lịch) - Ngày 22/01/2023 (Âm lịch)" description="TẠI TƯ GIA <br/>Phú Ngọc, Định Quán, Đồng Nai" />
        </div>
        <br/>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox title="LỄ THÀNH HÔN" time="11:30" date="Ngày 12/02/2023 (Dương lịch) - Ngày 22/01/2023 (Âm lịch)" description="Sảnh Eden, Trung tâm hội nghị tiệc cưới EROS PALACE, Biên Hòa Đồng Nai"/>
        </div>
        {/*<ButtonLive />*/}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah"/>
              <h2 className="main-font main-font__wedding">Wedding Information</h2>
              <span className="sub-title sub-title__wedding">Thông tin chi tiết</span>
            </div>
          </div>
          <div className="row">
            {!isInvitation && renderGuestInfo()}
            {isInvitation && (
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Mộng Vân"
                  time="Akan dilaksanakan pagi hari "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
                <WeddingInfoBox
                  title="Mộng Vân"
                  time="Sesuai jadwal undangan di e-ticket "
                  date="Sabtu, 03 Oktober 2020"
                  description="Orange Ballroom <br/>HARRIS Hotel Sentraland, Semarang"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
