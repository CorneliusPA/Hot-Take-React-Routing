import { useState } from "react";
import Axios from "axios";
import Post from '../css.modules/post.module.css'

const CreatePost = ({userData,commentData}) => {

    const [user_name, setUser_name] = useState("")
    const [profile_id, setProfile_id] = useState("")
    const [post_title, setPost_title] = useState("")
    const [written_text, setWritten_text] = useState("")
    const [media_location, setMedia_location] = useState("")

    const [postList, setPostList] = useState([])

    const addPost = () => {
        Axios.post(`http://localhost:3001/createPost`, {
            user_name: user_name,
            profile_id: profile_id,
           post_title: post_title,
          written_text: written_text,
          media_location: media_location
        }).then((response) => {
          setPostList([
            ...postList,
            {
            user_name: user_name,
            profile_id: profile_id,
            post_title: post_title,
            written_text: written_text,
            media_location: media_location
            },
          ]);
        });
      };

    return ( 
<div>
    <div className="information">
        <div className="userPostSelectContainer"> 
            <div className="userPostSelect">
                <div>
                    <label className={Post.test}>Username:</label>
                    <select id="id" name="username" onChange={(event) => {setUser_name(event.target.value);}}  >
                          <option >Select a Username</option>

{userData.map((props) => (
        
<option key={props.id} value={props.user_name}>{props.user_name} (ID:{props.id})</option>

))}
                    </select>
                </div>

<div>
    <label>User ID:</label>
    <select id="id" name="profile_id" onChange={(event) => {setProfile_id(event.target.value);}}>
          <option >Select the ID</option>

{userData.map((props) => (
    
<option key={props.id} value={props.id}>{props.id}</option>
    
))}
  </select>
</div>
            </div>
      </div>

      <div className="informationBox" >
          <label className="hidden">user_name</label>
          
          <input  className="textForm hidden"
                  type="text"
                  placeholder="User Name..."
                  onChange={() => user_name}
          />

          <label className="hidden">profile_id</label>
          
          <input className="textForm hidden"
                 type="number"
                 placeholder="User ID..."
                 onChange={() => profile_id}
          />

                <div>
          <label>Post Title:</label>

          <input className="postTitleInput"
                 type="text"
                 placeholder="Title..."
                 onChange={(event) => {
                 setPost_title(event.target.value);}}
          />

          <label>Written Text:</label>
          <textarea className="textareaInput"
                    type="text" rows="4" cols="45"
                    placeholder="Would you like to respond?..."
                    
                    onChange={(event) => {
                    setWritten_text(event.target.value);
                  }}
          />
              
            <div>
                <label>Media Location:</label>
                <input className="textareaInput postMediaInput"
                       type="text"
                       placeholder="Media URL..."
                       onChange={(event) => {
                       setMedia_location(event.target.value);}}
                />
           </div>

                <button onClick={addPost}> <a href="http://localhost:3000/">Submit Post</a> </button>
                
                </div>               
          </div>
     </div>      
</div>
     );
}
 
export default CreatePost;