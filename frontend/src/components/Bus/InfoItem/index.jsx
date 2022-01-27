import React from 'react';

import Wrapper, { CustomGrid, IsFullImg } from './styles';

const InfoItem = (props) => {
  const { info } = props;

  // 곧 도착 아닌경우에만 문자열 수정
  if (info.arrmsg1 !== '곧 도착') {

  }

  // isFullFlag1 - 0: 만차 아님, 1: 만차
  return (
    <Wrapper>
      <CustomGrid
        container
        direction="row"
        alignItems="center"
      >
        <div className="header">
          {info.rtNm}
        </div>
        {
          (info.arrmsg1 === '곧 도착' || info.arrmsg1 === '운행종료')
          ?
            (
              <>
                <div className="remain">
                  <p>{info.arrmsg1}</p>
                </div>
                <div className="locate">
                  <p>{info.arrmsg1}</p>
                </div>
              </>
            )
          :
            (
              <>
                <div className="remain">
                  <p>{info.arrmsg1.split('[')[0].replace('후', '').replace('분', '분 ')}</p>
                </div>
                <div className="locate">
                  <p>{info.arrmsg1.split('[')[1].replace(']', '')}</p>
                </div>
              </>
            )
        }
        <div className="full">
          <p>{info.isFullFlag1 ? "여유" : "혼잡"}</p>
          <IsFullImg color={info.isFullFlag1}></IsFullImg>
        </div>
      </CustomGrid>
    </Wrapper>
  )
}

export default InfoItem;