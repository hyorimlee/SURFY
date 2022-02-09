<<<<<<< HEAD
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Wrapper from './styles';

const NowSurvey = () => {
  return (
    <Wrapper>
      <Box 
        component="span" 
        className="nSvy" 
        sx={{ p: 2, borderRadius: 16 }}>
        현재 진행중인 설문
        <Button
          className="nSvyBtn"
          variant="contained"
          color="secondary"
          style={{ height: 100, borderRadius: 16 }}
        >
          설문 시작
        </Button>
      </Box>
    </Wrapper>
  )
}

export default NowSurvey;
=======
// import React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// import Wrapper from './styles';

// const NowSurvey = () => {
//   return (
//     <Wrapper>
//       <Box 
//         // component="span" 
//         className="nsvyInfo" 
//       >
//         <Box className="nSvy">
//           설문 ~ing
//         </Box>
//         <Box className="tBtn">
//           <Button
//             className="btn"
//             variant="contained"
//             color="secondary"
//           >
//             설문 시작
//           </Button>
//           <Box className="lt">
//             예상 소요시간 1~2분
//           </Box>          
//         </Box>
//       </Box>
//     </Wrapper>
//   )
// }

// export default NowSurvey;
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562



