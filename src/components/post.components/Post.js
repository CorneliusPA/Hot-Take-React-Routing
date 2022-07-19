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

  let navigateUser = useNavigate();
  
  const editPost = (id) => {
    Axios.put("https://hot-take-react.herokuapp.com/updatePost", 
    { written_text: updatePost, id: id }).then(
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
    ).then(() => {

      window.location.reload(false);

    })};

  const deletePost = (id) => {
    Axios.delete(`https://hot-take-react.herokuapp.com/deletePost/${id}`).then((response) => {
      setPostData(
        postData.filter(({props}) => {
          return props.id != id;
        })
      );
    }).then((response) => {

      navigateUser('/');
    }).then(() => {

      window.location.reload(false);

    })};

  const editComment = (id) => {
    Axios.put("https://hot-take-react.herokuapp.com/updateComment", { comment_text: updateComment, id: id }).then(
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
    ).then((response) => {

      navigateUser('/');
    }).then(() => {

      window.location.reload(false);

    })};

  const deleteComment = (id) => {
    Axios.delete(`https://hot-take-react.herokuapp.com/deleteComment/${id}`).then((response) => {
      setCommentData(
        commentData.filter((props) => {
          return props.id != id;
        })
      );
    }).then((response) => {

      navigateUser('/');
    }).then(() => {

      window.location.reload(false);

    })};



  const { profile_id, id, user_name} = useParams();


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
          
          <button onClick={() => editPost(props.id)}>Edit Post</button>
</div>       
    ))}



{commentData.filter((props) => props.post_id == id).map((props, key) => (
<div key={props.id} className="card comment">

            <h2>{props.user_name}</h2>
            <p>{props.comment_text}</p>
            <img className="commentMedia" src={props.media_location} alt="" />
            
            <textarea type="text"  className="textareaInput" placeholder='Edit Comment?'
            onChange = {(event) => {setUpdateComment(event.target.value);}}/>

            <button onClick={() => {editComment(props.id)}}> Edit </button>
            <button onClick={() => {deleteComment(props.id)}}> Delete</button>
           
</div>
))}

<CreateComment userData={userData} postData={postData} commentData={commentData} id={id}/>

        </div>
              <button onClick={() => { navigateUser('/'); }} >Return</button>
    </section>
    
    </> );
}
 
export default Post;