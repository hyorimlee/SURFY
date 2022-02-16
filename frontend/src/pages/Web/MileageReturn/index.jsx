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

const MileageReturn = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [number, setNumber] = React.useState('0');
  const [buttonColor, setButtonColor] = useState('lightgrey');
  const [amount, setAmount] = useState('');
  let [value, setValue] = React.useState('');

  function onAmount(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setAmount(e.target.value);
    }
  }
  
  const handleChangeButtonColor = () => { 
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleClickOpen = () => {
    handleChangeButtonColor();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetInputField = () => {
  }

  useEffect(() => {
    numberCheck(value)
  }, [{value}])

  const onChange = e => {
    numberCheck(e.target.value)
  }


  const numberCheck = (v) => {

    let num = v || ''

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
          <img className="coinImage" alt="" src="/images/coin.gif"/>
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <ClearIcon 
                      onClick={() => setAmount(() => '')}
                    />
                  </InputAdornment>
                )
              }}

            />
            <FormHelperText>필수 입력</FormHelperText>
          </FormControl>
          <Button 
            disabled={number === '0' || value === '' ? true : false}
            grey={number === '0' || value === '' ? true.toString() : false.toString()}
            variant="contained" 
            size="medium" 
            className="btnClick"
            onClick={(handleClickOpen)}>
            확인
          </Button>
        </Grid>     
      </Wrapper>
      <CustomDialog
        open={open}
        onClose={handleClose}
      >
        <CustomDialogTitle id="alert-dialog-title">계좌송금</CustomDialogTitle>
        <DialogContent dividers>
          <TextField 
            label="보낼금액(원)"
            value={amount}
            onChange={onAmount}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ClearIcon 
                    onClick={() => setAmount(() => '')}
                  />
                </InputAdornment>
              )
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button 
            autoFocus
            disabled={amount === '' ? true : false}
            grey={amount === '' ? true.toString() : false.toString()}
            variant="contained"
            size="medium"
            onClick={handleClose}
            style={{
              backgroundColor: "#64AAFF"
            }}
          >
            송금하기
          </Button>
        </DialogActions>
      </CustomDialog>
    </Layout>
  )
}

export default MileageReturn;

