import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=> ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
<div className={classes.root}>
    
        
    <Card className={classes.root} onClick={(event) => props.saveItemID(props.id, event)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
            <br></br>
            <br></br>
            {props.price}
            <br></br>
            {props.shipping}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/buyerdetails" style={{textDecoration: 'none', color:'white'}}>
        <Button size="small" color="primary">
          Details
        </Button>
        </Link>
      </CardActions>
    </Card>
    
    </div>
  );
}