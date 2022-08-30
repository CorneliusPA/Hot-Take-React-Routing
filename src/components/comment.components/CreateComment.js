import { useState } from "react";
import Axios from "axios";
import Tooltip from "../post.components/Tooltip";
import { useNavigate } from 'react-router-dom';

const CreateComment = ({userData, postData, commentData}, id) => {

  const [user_name, setUser_name] = useState("")
  const [profile_id, setProfile_id] = useState(0)
  const [post_id, setPost_id] = useState(0)
  const [comment_text, setComment_text] = useState("")
  const [media_location, setMedia_location] = useState("")

  let navigateComment = useNavigate();

  const [commentList, setCommentList] = useState([])

  const addComment = () => {
    Axios.post(`https://hot-take-react.herokuapp.com/createComment`, {

          user_name: user_name,
          profile_id: profile_id,
          post_id: post_id,
          comment_text: comment_text,
          media_location: media_location,

    }).then((response) => {
      setCommentList([
        ...commentList,
        {

          user_name: user_name,
          profile_id: profile_id,
          post_id: post_id,
          comment_text: comment_text,
          media_location: media_location,

        },
      ])
    }).then((response) => {

      navigateComment('/');
    }).then(() => {

      window.location.reload(false);

    })};

return ( 
<div className="information">
    <div className="userCommentSelectContainer"> 
        <div className="userCommentSelect">
            
                <label>Username:</label>


               
           
           
           

           <div className="example-wrapper">
               <Tooltip content="Username (ID:X)<=" direction="top">
                       <span className="example-emoji" role="img" aria-label="User ID">
                             <label>User ID:</label>
                       </span>
               </Tooltip>
          </div>

              <div className="example-wrapper">
                  <Tooltip content="http://localhost:3000/posts/0/(X) <=" direction="top">
                      <span className="example-emoji" role="img" aria-label="User ID">
                           <label>Post ID:</label>
                      </span>
                  </Tooltip>
              </div>
              
 <select className="commentSelect" id="id" name="username" onChange={(event) => {setUser_name(event.target.value);}}  >
               <option >Username</option>

{userData.map((props, key) => (
  
        <option key={props.id} value={props.user_name}>{props.user_name} (ID:{props.id})</option>
    
))}
               </select>

               <select className="commentSelect" id="id" name="profile_id" onChange={(event) => {setProfile_id(event.target.value);}}>
               <option >User ID</option>

{userData.map((props, key) => (

        <option key={props.id} value={props.id}>{props.id}</option>

))}
              </select>
          

         

             

              <select className="commentSelect" id="id" name="post_id" onChange={(event) => {setPost_id(event.target.value);}}>
              <option >ID</option>

{postData.map((props, key) => (

        <option key={props.id} value={props.id}>{props.id}</option>

))}

             </select>
          
     </div>
</div>
          <div>

                <label className="hidden">user_name</label>
                <input 
                      type="text"  className="textForm hidden"
                      onChange={() => user_name}
                />

                <label className="hidden">profile_id</label>
                <input className="textForm hidden"
                      type="number"
                      onChange={() => profile_id}
                />

                <label className="hidden">post_id</label>
                <input className="textForm hidden"
                      type="number"  
                      onChange={() => post_id}
                />

                <div>
                <label>Comment Text:</label>

                <textarea className="textareaInput textareaSize"
                  type="text"
                  rows="4" cols="53" 
                  placeholder="Would you like to respond?..."
                  onChange={(event) => {
                    setComment_text(event.target.value);
                  }}
                />
               </div>

               <div>
                <label>Media Location:</label>

                <input className="textareaInput"
                  type="text"
                  placeholder="Media URL..."
                  onChange={(event) => {
                    setMedia_location(event.target.value);}}
                />

               </div>
          </div>
     <button  onClick={addComment}> Submit Comment </button>      
</div>
        
       
     );
}
 
export default CreateComment;