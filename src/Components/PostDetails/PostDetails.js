import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

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

const PostDetails = () => {
    const{postId} = useParams();

    const[details,setDetails] = useState([]);

    const[comments,setComments] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    useEffect(() => {
         const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
         fetch(url)
         .then(res=>res.json())
         .then(data=>setComments(data))
    },[])
    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

    return (
      
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h2>Details:</h2>
         <br/>
         No: {details.id}
        </Typography>
        <Typography variant="h5" component="h2">
         Title: {details.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Body: {details.body}
        </Typography>
        
      </CardContent>
      <CardActions>
          <h3>Comments:</h3>
          {/* <p>{comments.id}</p> */}
       {
           comments.map(comments =><Comment comments={comments}></Comment>)
       }
      </CardActions>
    </Card>
   
    );
};

export default PostDetails;