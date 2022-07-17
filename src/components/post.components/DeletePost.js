import { useState } from "react";
import Axios from "axios";

const DeletePost = ({postData, setPostData}) => {

let id;

    const deletePost = ({postData}) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
          setPostData(
            postData.filter(({props}) => {
              return props.id != props.id;
            })
          );
        });
      };

    return ( <>
    
    <button onClick={({props}) => {deletePost(props.id);}}> <a href="http://localhost:3000/">Delete Post</a> </button>

    </> );
}
 
export default DeletePost;