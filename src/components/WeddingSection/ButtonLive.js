import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Có điều gì sơ suất mong mọi người thông cảm giúp gia đình</p>
        <br/>
        <p className="text__live">Cảm ơn mọi người thật nhiều.</p>
        <br/>
        <a href="https://www.instagram.com/dindadipoyono/" target="_blank" rel="noreferrer">
          {/* <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Live IG" />
              <span>@dindadipoyono</span>
            </div>
          </div> */}
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
