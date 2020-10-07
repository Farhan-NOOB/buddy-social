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
                   <li> user Id: {props.comments.id}
                   <br/>
                   <strong>Name:</strong> {props.comments.name}
                   <br/>
                   <strong>Email:</strong> {props.comments.email}
                   <br/>
                    <strong>Body:</strong> {props.comments.body}
                   </li>
               }
           </ul>
        </div>
    );
};

export default Comment;