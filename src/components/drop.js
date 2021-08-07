import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      margin:"20px 0px"
    },
    heading: {
      fontSize:"1.2em !important",
      fontWeight: theme.typography.fontWeightBold,
      color:"rgb(36, 95, 211)",
      padding:"10px 0px"
    }
  }));

  const Drop=({heading,content})=>{
    const classes = useStyles();
    return(
    <div className={classes.root}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{heading}</Typography>
      </AccordionSummary>
      <AccordionDetails className="drop">
        <Typography >
         {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
    )
  }
    

  export default Drop;