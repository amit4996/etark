import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '0.9em',
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#245FD3',
      textTransform:'uppercase',
      borderColor: '#0063cc',
      fontFamily: [
        'Poppins',
        'sans-serif'
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
    },
  })(Button);
  
  
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  
const Menu = ()=>{
    const classes = useStyles();
   return(
       <div className="menu">
           <div className="logo"><img src="logo.png" alt="Logo"/></div>
           <div>
               <a href="">How to Use</a>
               <a href="">About Us</a>
               <a href="">Contact Us</a>
           </div>
           <div className="button-container">
               <a href="">Login</a>
               <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Get Started
      </BootstrapButton>
           </div>
       </div>
   )
}

export default Menu