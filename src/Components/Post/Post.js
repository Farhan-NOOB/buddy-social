import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Post = (props) => {
    const{id,title,body} = props.post;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          No: {id}
        </Typography>
        <Typography variant="h5" component="h2">
          Title: {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Body: {body}
        </Typography>
        
      </CardContent>
      <Link to={`/details/${id}`}>
      <CardActions >
        <Button size="small">See Details</Button>
      </CardActions>
      </Link>
    </Card>
    
   
       
            
           
        
    );
};

export default Post;