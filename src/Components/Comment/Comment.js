import React,{useEffect,useState,useParams} from 'react';

const Comment = (props) => {
    const styles={
        border: '1px solid black',
       borderRadius:'10px'
    }
   
  
    return (
        <div>
            
           <ul style={styles}>
               {
                   <li>{props.comments.id}
                   <br/>
                   Name: {props.comments.name}
                   <br/>
                   {props.comments.email}
                   <br/>
                   {props.comments.body}
                   </li>
               }
           </ul>
        </div>
    );
};

export default Comment;