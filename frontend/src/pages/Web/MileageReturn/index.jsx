import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Button,
  FormHelperText, 
  InputLabel, 
  InputBase, 
  FormControl, 
  NativeSelect,
  Typography, 
  makeStyles,
  withStyles } 
  from '@material-ui/core/';
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

const MileageReturn = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState('0');
  let [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    numberCheck(value)
  }, [value])

  const onChange = e => {
    numberCheck(e.target.value)
  }

  const numberCheck = (v) => {
<<<<<<< HEAD
    let num = v || 0
=======
    let num = v || ''
>>>>>>> feature/mileage

    if (!isFinite(num)) return
    num = num.toString()

    if ( num !== '0' && !num.includes('.')) {
      num = num.replace(/^0+/g, '');
    }

    setValue(num)
  }

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
<<<<<<< HEAD
=======
          <img className="coinImage" alt="" src="/images/coin.gif"/>
>>>>>>> feature/mileage
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">은행</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={number}
              onChange={handleChange}
              className="selectBtn"
              input={<BootstrapInput />}
            >
              <option aria-label="은행선택" value={0} />
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
              value={value}
              onChange={onChange}
            />
            <FormHelperText>필수 입력</FormHelperText>
          </FormControl>
          <Button variant="contained" size="medium" className="btnClick" onClick={handleClickOpen}>
            송금
          </Button>
        </Grid>     
      </Wrapper>
      <CustomDialog
        open={open}
        onClose={handleClose}
      >
        <CustomDialogTitle id="alert-dialog-title">알림</CustomDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            송금이 완료되었습니다.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            확인
          </Button>
        </DialogActions>
      </CustomDialog>
    </Layout>
  )
}

export default MileageReturn;