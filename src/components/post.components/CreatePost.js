import { useState } from "react";
import Axios from "axios";
import Tooltip from "./Tooltip";
import { useNavigate } from 'react-router-dom';

const CreatePost = ({userData,commentData}) => {

    const [user_name, setUser_name] = useState("")
    const [profile_id, setProfile_id] = useState("")
    const [post_title, setPost_title] = useState("")
    const [written_text, setWritten_text] = useState("")
    const [media_location, setMedia_location] = useState("")

    let navigate = useNavigate();

    const [postList, setPostList] = useState([])

    const addPost = () => {
        Axios.post(`https://hot-take-react.herokuapp.com/createPost`, {
            user_name: user_name,
            profile_id: profile_id,
           post_title: post_title,
          written_text: written_text,
          media_location: media_location,
        }).then((response) => {
          setPostList([
            ...postList,
            {
            user_name: user_name,
            profile_id: profile_id,
            post_title: post_title,
            written_text: written_text,
            media_location: media_location,
            },
          ]);
        }).then((response) => {

          navigate('/');

        }).then(() => {

          window.location.reload(false);

        })};

    return ( 
<div>
    <div className="information">
        <div className="userPostSelectContainer"> 
            <div className="userPostSelect">
                
                    <label>Username:</label>
                    <select id="id" name="username" onChange={(event) => {setUser_name(event.target.value);}}  >
                          <option >Select a Username</option>

{userData.map((props) => (
        
<option key={props.id} value={props.user_name}>{props.user_name} (ID:{props.id})</option>

))}
                    </select>
                



     <div className="example-wrapper">
        <Tooltip content="Username (ID:X)<=" direction="top">
          <span className="example-emoji" role="img" aria-label="User ID">
            <label>User ID:</label>
          </span>
        </Tooltip>
      </div>

    <select id="id" name="profile_id" onChange={(event) => {setProfile_id(event.target.value);}}>
          <option >Select the ID</option>

{userData.map((props) => (
    
<option key={props.id} value={props.id}>{props.id}</option>
    
))}
  </select>

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
                    setWritten_text(event.target.value);}}
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

                <button onClick={addPost}> Submit Post </button>
                
                </div>               
          </div>
     </div>      
</div>
     );
}
 
export default CreatePost;