import { useState } from "react";
import Axios from "axios";


const CreateUser = ({userData,commentData}) => {
    
    const [full_name, setFull_name] = useState("");
    const [user_name, setUser_name] = useState("");
    const [user_icon, setUser_icon] = useState("");
    const [userList, setUserList] = useState([]);

    const addUser = () => {
        Axios.post(`http://localhost:3001/createUser`, {
           
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
        });
      };

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

               <button onClick={addUser}><a href="http://localhost:3000/">Create User</a></button>
          </div>     
     </div>
</div>       
     );
}
 
export default CreateUser;