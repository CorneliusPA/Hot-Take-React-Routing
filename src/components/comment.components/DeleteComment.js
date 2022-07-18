import { useState } from "react";
import Axios from "axios";

const DeleteComment = ({commentData, setCommentData}) => {

    const deleteComment = (id) => {
        Axios.delete(`https://hot-take-react.herokuapp.com/deletePost/${id}`).then((response) => {
          setCommentData(
            commentData.filter((props) => {
              return props.id != id;
            })
          );
        });
      };

return ( 
<>

    <button onClick={(props) => {deleteComment(props.id)}}> Delete Comment </button>

</> 
)}
 
export default DeleteComment;