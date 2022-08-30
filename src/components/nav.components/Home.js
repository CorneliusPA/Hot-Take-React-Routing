import PostCard from "../post.components/PostCard";
import {Link} from 'react-router-dom';
import CreateCommentDemo from "../comment.components/CreateCommentDemo";

const Home = ({userData, postData, setPostData, commentData}) => {
    return ( 
    <>
    <PostCard  userData={userData} postData={postData} setPostData={setPostData} commentData={commentData}/>      
    </> );
}
 
export default Home;