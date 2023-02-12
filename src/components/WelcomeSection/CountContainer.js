import React from 'react';
import useDateCountdown from '@/hooks/useDateCountdown';
import CountItem from './CountItem';
import ButtonLive from '../WeddingSection/ButtonLive';
import { styMargin } from './styles';

function CountContainer() {
  const { days, hours, minutes, seconds, timeHasRunOut, isEventOver } = useDateCountdown();
  const finalText = isEventOver ? 'Tiệc cưới đã diễn ra thành công tốt đẹp!' : 'Tiệc cưới đang được diễn ra!';

  if (timeHasRunOut)
    return (
      <>
        <div className="row">
          <div className="col-md-12" style={{ fontSize: '20px' }}>
            {`${finalText}`}
          </div>
        </div>
        <ButtonLive />
      </>
    );

  return (
    <div className="col-md-12" css={styMargin('0 0 16px 0')}>
      <CountItem text="ngày" number={days} />
      <CountItem text="giờ" number={hours} />
      <CountItem text="phút" number={minutes} />
      <CountItem text="giây" number={seconds} />
    </div>
  );
}

export default CountContainer;
