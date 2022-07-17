import { useState } from "react";
import Axios from "axios";

const DeleteComment = ({commentData, setCommentData}) => {

    const deleteComment = (id) => {
        Axios.delete(`http://localhost:3001/deletePost/${id}`).then((response) => {
          setCommentData(
            commentData.filter((props) => {
              return props.id != id;
            })
          );
        });
      };

return ( 
<>

    <button onClick={(props) => {deleteComment(props.id)}}> <a href="http://localhost:3000/">Delete Comment</a> </button>

</> 
)}
 
export default DeleteComment;