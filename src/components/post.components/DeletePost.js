import { useState } from "react";
import Axios from "axios";

const DeletePost = ({postData, setPostData}) => {

let id;

    const deletePost = ({postData}) => {
        Axios.delete(`https://hot-take-react.herokuapp.com/delete/${id}`).then((response) => {
          setPostData(
            postData.filter(({props}) => {
              return props.id != props.id;
            })
          );
        });
      };

    return ( <>
    
    <button onClick={({props}) => {deletePost(props.id);}}> Delete Post</button>

    </> );
}
 
export default DeletePost;