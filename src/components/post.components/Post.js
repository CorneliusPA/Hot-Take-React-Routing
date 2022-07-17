import React from 'react';
import {useState} from 'react'
import {useParams, useNavigate} from "react-router-dom";
import CreateComment from '../comment.components/CreateComment';
import DeletePost from './DeletePost';
import DeleteComment from '../comment.components/DeleteComment';
import Axios from 'axios';

const Post = ({userData, postData, setPostData, commentData, setCommentData}) => {

  const [ updatePost, setUpdatePost] = useState("")
  const [ updateComment, setUpdateComment] = useState("");
  
  const editPost = (id) => {
    Axios.put("http://localhost:3001/updatePost", { written_text: updatePost, id: id }).then(
      (response) => {
        setPostData(
          postData.map((props) => {
            return props.id == id
              ? {
                  id: props.id,
                  post_id: props.post_id,
                  post_title: props.post_title,
                  written_text: updatePost,
                  media_location: props.media_location,
                  user_name: props.user_name,
                }
              : props.id;
          })
        );
      }
    );
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/deletePost/${id}`).then((response) => {
      setPostData(
        postData.filter(({props}) => {
          return props.id != id;
        })
      );
    });
  };

  const editComment = (id) => {
    Axios.put("http://localhost:3001/updateComment", { comment_text: updateComment, id: id }).then(
      (response) => {
        setCommentData(commentData.map((props) => {
            return props.id == id ? {
                id: props.id,
                post_id: props.post_id,
                post_title: props.post_title,
                comment_text: updateComment,
                media_location: props.media_location,
                user_name: props.user_name,
                }
              : props.id;
          })
        );
      }
    );
  };

  const deleteComment = (id) => {
    Axios.delete(`http://localhost:3001/deleteComment/${id}`).then((response) => {
      setCommentData(
        commentData.filter((props) => {
          return props.id != id;
        })
      );
    });
  };



  const { profile_id, id, user_name} = useParams();
  let navigate = useNavigate();

    return ( 
    <>
    
    <section className='full'>
            <div className="container">
         

{postData.filter((props) => props.id == id).map((props) => (
                         
<div key={props.id} className="card post">

    <div className='postDisplay'>   
{userData.filter((props) => props.id == profile_id).map((props, key) => (

    <img src={props.user_icon} className='iconSample' key={props.id} ></img>))}
    <h2>{props.user_name}</h2>
           
    </div>

          <h1>{props.post_title}</h1>  
          
          <img className='imgCenter' src={props.media_location} alt="" />
          
          <p><strong>{props.user_name}:</strong>{props.written_text}</p>
          
          <textarea  type="text" rows="4" cols="5" className="textareaSize" placeholder='Edit Post?...'
          onChange = {(event) => {setUpdatePost(event.target.value);}}
          />
          
          <a href="http://localhost:3000/"><button onClick={() => editPost(props.id)}>Edit</button></a>
</div>       
    ))}



{commentData.filter((props) => props.post_id == id).map((props, key) => (
<div key={props.id} className="card comment">

            <h2>{props.user_name}</h2>
            <p>{props.comment_text}</p>
            
            <textarea type="text"  className="textareaInput" placeholder='Edit Comment?'
            onChange = {(event) => {setUpdateComment(event.target.value);}}/>

           <a href="http://localhost:3000/"> <button onClick={() => {editComment(props.id)}}> Edit </button></a>
           <a href="http://localhost:3000/"> <button onClick={() => {deleteComment(props.id)}}> Delete</button></a>
           
</div>
))}

<CreateComment userData={userData} postData={postData} commentData={commentData} id={id}/>

        </div>
              <button onClick={() => { navigate("/"); }} >Return</button>
    </section>
    
    </> );
}
 
export default Post;