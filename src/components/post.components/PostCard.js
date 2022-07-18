import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const PostCard = ({userData, postData}, setPostData) => {
    
    const deletePost = (id) => {
        Axios.delete(`https://hot-take-react.herokuapp.com/deletePost/${id}`).then((response) => {
          setPostData(
            postData.filter((props) => {
              return props.id != id;
            })
          );
        });
      };

    return ( 
    <> 
     {postData.map((props, key) => (
        <div key={props.id} className="postFeed">
            <h2>{props.user_name}</h2>
               <h1 className='postTitle'>{props.post_title}</h1>
                  
                  <Link to = {`/posts/${props.profile_id}/${props.id}`}> 
                       <h3 className='absolute viewButton'> View More</h3>
                  </Link>

                  
                       <button className='absolute deleteButton'  onClick={() => { deletePost(props.id);}}> Delete Post</button>
                    
        </div>
    ))}
    
    </> );
}
 
export default PostCard;