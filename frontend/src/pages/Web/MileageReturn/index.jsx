import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Button,
  FormHelperText, 
  InputLabel, 
  InputBase, 
  FormControl, 
  NativeSelect,
  InputAdornment,
  TextField,
  makeStyles,
  withStyles } 
  from '@material-ui/core/';
import ClearIcon from '@material-ui/icons/Clear';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { 
  CustomDialog, 
  CustomDialogTitle,    
  Wrapper } from './styles';
import Layout from '../../../layout/layout';


const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const BANK = {
  '1': '카카오뱅크',
  '2': '농협은행',
  '3': '기업은행',
  '4': '신한은행',
  '5': '우리은행',
  '6': '하나은행',
  '7': '국민은행',
}

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

const MileageReturn = (props) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [bankIdx, setBankIdx] = React.useState('0');
  let [account, setAccount] = React.useState('');
  const [mileage, setMileage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogContent, setDialogContent] = useState('');

  // onChanged function
  const bankIdxChanged = (event) => {
    setBankIdx(event.target.value);
  };

  const accountChanged = e => {
    const re = /^[0-9-]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setAccount(e.target.value);
    }
  }
  
  const mileageChanged = (e) => {
    const re = /^[0-9]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setMileage(e.target.value);
    }
  }

  // dialog handler
  const dialogOpen = () => {
    setIsDialogOpen(true);
  };

  const dialogClose = () => {
    setIsDialogOpen(false);
  };

  // request refund mileage
  const refundMileage = () => {
    if (bankIdx === '0' || account === '' || mileage === '') {
      setDialogTitle('요청 실패');
      setDialogContent('은행 / 계좌번호 / 환급액을 모두 입력해주세요');
      dialogOpen(true);
    } else if (!localStorage.getItem('pk') || !localStorage.getItem('id')) {
      setDialogTitle('요청 실패');
      setDialogContent('로그인이 필요한 서비스입니다');
      dialogOpen(true);
    } else {
      fetch(`${SERVER_BASE_URL}/api/mileage/${localStorage.getItem('pk')}`).then(response => response.json())
      .then(response => {
        console.log(response);
        if (response >= mileage) {
          fetch(`${SERVER_BASE_URL}/api/mileage/refund`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'bank': BANK[bankIdx], 'accountNumber': account, 'memberId': localStorage.getItem('pk'), 'amount': mileage }),
          })
          .then(() => {
            setDialogTitle('요청 성공');
            setDialogContent('마일리지 환급이 정상적으로 신청되었습니다');
            dialogOpen(true);
          });
        } else {
          setDialogTitle('요청 실패');
          setDialogContent('마일리지 잔액이 부족합니다');
          dialogOpen(true);
        }
      })
      
    }
  }

  return (
    <Layout>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img className="coinImage" alt="" src="/images/coin.gif"/>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">은행</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={bankIdx}
              onChange={bankIdxChanged}
              className="selectBtn"
              input={<BootstrapInput />}
            >
              <option aria-label="은행 선택" value={0}>은행 선택</option>
              <option value={1}>카카오뱅크</option>
              <option value={2}>농협은행</option>
              <option value={3}>기업은행</option>
              <option value={4}>신한은행</option>
              <option value={5}>우리은행</option>
              <option value={6}>하나은행</option>
              <option value={7}>국민은행</option>
            </NativeSelect>
            <FormHelperText>필수 선택</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <BootstrapInput 
              id="demo-customized-textbox" 
              className="inputLabel" 
              placeholder="계좌번호 입력"
              value={account}
              onChange={accountChanged}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon 
                      onClick={() => setAccount(() => '')}
                    />
                  </InputAdornment>
                )
              }}
            />
            <FormHelperText>필수 입력</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <BootstrapInput 
              id="demo-customized-textbox" 
              className="inputLabel" 
              placeholder="환급 마일리지액"
              value={mileage}
              onChange={mileageChanged}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon 
                      onClick={() => setMileage(() => '')}
                    />
                  </InputAdornment>
                )
              }}
            />
            <FormHelperText>필수 입력</FormHelperText>
          </FormControl>
          <Button 
            disabled={bankIdx === '0' || account === '' || mileage === '' ? true : false}
            grey={bankIdx === '0' || account === '' || mileage === '' ? true.toString() : false.toString()}
            variant="contained" 
            size="medium" 
            className="btnClick"
            onClick={refundMileage}>
            확인
          </Button>
        </Grid>     
      </Wrapper>
      <CustomDialog
        open={isDialogOpen}
        onClose={dialogClose}
      >
        <CustomDialogTitle id="alert-dialog-title">{dialogTitle}</CustomDialogTitle>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button 
            autoFocus
            variant="contained"
            size="medium"
            onClick={dialogClose}
            style={{
              backgroundColor: "#64AAFF"
            }}
          >
            확인
          </Button>
        </DialogActions>
      </CustomDialog>
    </Layout>
  )
}

export default MileageReturn;

