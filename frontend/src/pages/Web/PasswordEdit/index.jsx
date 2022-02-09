import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Navbar from '../../../components/navbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Navbar />
      <Container component="main" sx={{ p:2, m:"auto" }}>
        <Typography variant="h6" gutterBottom>
          비밀번호 수정
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="이전 비밀번호"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="변경할 비밀번호"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="비밀번호 확인"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" href="/web">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}