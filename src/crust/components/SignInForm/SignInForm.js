import React,{memo,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))


function SignInForm ({onSignIn}){
    const classes=useStyles();

    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');

    const handleEmail =(e) =>{
      setEmail(e.target.value)
    }

    const handlePassword = (e) => {
      setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const data={
        'email':email,
        'password':password
          }
      onSignIn(data);
    }

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            value={email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type='email'
            onChange={handleEmail}
          />
          <TextField
            value={password}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={handlePassword}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
    )
}

export default memo(SignInForm);