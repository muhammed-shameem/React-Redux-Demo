import React,{memo} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  export default memo(Footer);