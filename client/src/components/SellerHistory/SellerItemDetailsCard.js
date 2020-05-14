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

const useStyles = makeStyles({
    root: {
      maxWidth: 1000
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }

  });
  
  export default function ImgMediaCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
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
            {props.type}
            <br></br>
            <br></br>
            {props.price}
            <br></br>
            {props.shipping}
            <br></br>
            <br></br>
            {props.itemSeller}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={(event) => props.deleteItem(props.id, event)} value={props.id} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
    );
  }