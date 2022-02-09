import React, { useState } from 'react';
import Wrapper from './styles';
import { Link } from 'react-router-dom';
import { Grid, Button, FormHelperText } from '@material-ui/core/';
import Layout from '../../../layout/layout';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
    // Use the system font instead of the default Roboto font.
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
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout isLogin={isLogin}>
      <Wrapper>
      <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
        <div>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-textbox">계좌번호 입력</InputLabel>
            <BootstrapInput id="demo-customized-textbox" />
            <FormHelperText>필수 입력</FormHelperText>
          </FormControl>
          <FormControl className={classes.margin}>
            <InputLabel 
              id="demo-customized-select-label">은행</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <MenuItem value={10}>카카오뱅크</MenuItem>
              <MenuItem value={20}>농협은행</MenuItem>
              <MenuItem value={30}>기업은행</MenuItem>
              <MenuItem value={30}>신한은행</MenuItem>
              <MenuItem value={30}>우리은행</MenuItem>
              <MenuItem value={30}>하나은행</MenuItem>
              <MenuItem value={30}>국민은행</MenuItem>
            </Select>
            <FormHelperText>필수 선택</FormHelperText>
          </FormControl>
          {/* <FormControl className={classes.margin}>
            <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              value={age}
              onChange={handleChange}
              input={<BootstrapInput />}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl> */}
          <Link to = "/" style={{textDecoration: 'none' }} className="lnk">
            <Button variant="contained" size="medium" className="btnClick">
              송금
            </Button>        
          </Link>
        </div>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

export default MileageReturn;