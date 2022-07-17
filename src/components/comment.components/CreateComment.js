import { useState } from "react";
import Axios from "axios";

const CreateComment = ({userData, postData, commentData}, id) => {

  const [user_name, setUser_name] = useState("")
  const [profile_id, setProfile_id] = useState(0)
  const [post_id, setPost_id] = useState(0)
  const [comment_text, setComment_text] = useState("")
  const [media_location, setMedia_location] = useState("")

  const [commentList, setCommentList] = useState([])

  const addComment = () => {
    Axios.post(`http://localhost:3001/createComment`, {

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
      ]);
    });
  };

return ( 
<div className="information">
    <div className="userCommentSelectContainer"> 
        <div className="userCommentSelect">
            <div>
                <label>Username:</label>
                <select id="id" name="username" onChange={(event) => {setUser_name(event.target.value);}}  >
               <option >Select a Username</option>

{userData.map((props, key) => (
  
        <option key={props.id} value={props.user_name}>{props.user_name} (ID:{props.id})</option>
    
))}

               </select>
           </div>
           
           <div>
               <label >User ID:</label>
               <select id="id" name="profile_id" onChange={(event) => {setProfile_id(event.target.value);}}>
               <option >Select the User ID</option>

{userData.map((props, key) => (

        <option key={props.id} value={props.id}>{props.id}</option>

))}
              </select>
          </div>

          <div>
              <label>Post ID:</label>
              <select id="id" name="profile_id" onChange={(event) => {setPost_id(event.target.value);}}>
              <option >Select the Post ID</option>

{postData.map((props, key) => (

        <option key={props.id} value={props.id}>{props.id}</option>

))}

             </select>
          </div>
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

                <textarea className="textareaInput"
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
     <button  onClick={addComment}> <a href="http://localhost:3000/">Submit Comment</a> </button>      
</div>
        
       
     );
}
 
export default CreateComment;