import React, { useState, useEffect } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { Grid, Button, FormHelperText } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

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

const MileageReturn = (props) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('id') ? true : false);
  const classes = useStyles();
  const [num, setNum] = React.useState('');
  let [ value, setValue ] = useState('');
  const handleChange = (event) => {
    setNum(event.target.value);
  };

  useEffect(() => {
    numberCheck(value)
  }, [value])

  const onChange = e => {
    numberCheck(e.target.value)
  }

  const numberCheck = (v) => {
    let num = v || 0

    if (!isFinite(num)) return
    num = num.toString()

    if ( num !== '0' && !num.includes('.')) {
      num = num.replace(/[^0-9]/g,'')
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
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">은행</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={num}
              onChange={handleChange}
              className="selectBtn"
              input={<BootstrapInput />}
            >
              <option aria-label="은행선택" value="" />
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
          <Link to = "/" style={{textDecoration: 'none' }} className="lnk">
            <Button variant="contained" size="medium" className="btnClick">
              송금
            </Button>        
          </Link>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default MileageReturn;