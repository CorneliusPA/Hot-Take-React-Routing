import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";


const CreateUser = ({userData,commentData}) => {
    
    const [full_name, setFull_name] = useState("");
    const [user_name, setUser_name] = useState("");
    const [user_icon, setUser_icon] = useState("");
    const [userList, setUserList] = useState([]);
    
    let navigateNewUser = useNavigate();
    
    const addUser = () => {
        Axios.post(`https://hot-take-react.herokuapp.com/createUser`, {
           
        full_name: full_name,
        user_name: user_name,   
        user_icon: user_icon

        }).then((response) => {
          setUserList([
            ...userList,
        {    

        full_name: full_name,
        user_name: user_name,    
        user_icon: user_icon
          
      },
          ]);
        }).then((response) => {

          navigateNewUser('/');
        }).then(() => {

          window.location.reload(false);

        })};

    return ( 
<div>
    <div className="information">
        <div className="createUserInfoBox" >
            <div>
                <label className="">Full Name:</label>
                      <input className="textForm "
                        type="text"
                        placeholder="Full Name..."
                        onChange={(event) => {
                        setFull_name(event.target.value);}}
                      />
           </div>

            <div>
                 <label className="">User Name:</label>
                      <input className="textForm "
                        type="text"
                        placeholder="User Name..."
                        onChange={(event) => {
                        setUser_name(event.target.value);}}
                      />
           </div>

            <div>
                <label className="">User Icon:</label>
                      <input className="textForm "
                        type="text"
                        placeholder="User Icon URL..."
                        onChange={(event) => {
                        setUser_icon(event.target.value);}}
                      />
           </div>

               <button onClick={addUser}>Create User</button>
          </div>     
     </div>
</div>       
     );
}
 
export default CreateUser;