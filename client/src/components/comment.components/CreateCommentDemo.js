import { useState } from "react";
import Axios from "axios";
import Tooltip from "../post.components/Tooltip";
import { useNavigate } from 'react-router-dom';

const CreateCommentDemo = () => {
    return ( 
    <>
    
    <div className="information">
    <div className="userCommentSelectContainer"> 
        <div className="userCommentSelect">
            <div>
                <label>Username:</label>
                <select id="id" name="username"   >
               <option >Username</option>

               </select>
           </div>
           
           <div>

           <div className="example-wrapper">
               <Tooltip content="Username (ID:X)<=" direction="top">
                       <span className="example-emoji" role="img" aria-label="User ID">
                             <label>User ID:</label>
                       </span>
               </Tooltip>
          </div>

               <select id="id" name="profile_id" >
               <option >User ID</option>


              </select>
          </div>

          <div>

              <div className="example-wrapper">
                  <Tooltip content="http://localhost:3000/posts/0/(X) <=" direction="top">
                      <span className="example-emoji" role="img" aria-label="User ID">
                           <label>Post ID:</label>
                      </span>
                  </Tooltip>
              </div>

              <select id="id" name="post_id" >
              <option >Post ID</option>



             </select>
          </div>
     </div>
</div>
          <div>

                <label className="hidden">user_name</label>
                <input 
                      type="text"  className="textForm hidden"
                     
                />

                <label className="hidden">profile_id</label>
                <input className="textForm hidden"
                      type="number"
                    
                />

                <label className="hidden">post_id</label>
                <input className="textForm hidden"
                      type="number"  
                    
                />

                <div>
                <label>Comment Text:</label>

                <textarea className="textareaInput"
                  type="text"
                  rows="4" cols="35" 
                  placeholder="Would you like to respond?..."
              
                />
               </div>

               <div>
                <label>Media Location:</label>

                <input className="textareaInput"
                  type="text"
                  placeholder="Media URL..."
                  
                />

               </div>
          </div>
     <button > Submit Comment </button>      
</div>

    </> );
}
 
export default CreateCommentDemo;