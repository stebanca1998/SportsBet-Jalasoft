import {React} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
}));

export default function SportsBet() {
    const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">          
        <h2>Welcome to SportsBet app</h2>
      </Container>
    );
  }