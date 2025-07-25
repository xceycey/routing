import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

function Users() {
  const [users,setUser]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data=> setUser(data))


  },[])




  return (
    <div>
        <h2>Kullanıcılar</h2>
        {
          users.map((user)=>(
            <ul>
              <li key={user.id}>
               <Link to={`${user.id}`} state={user}>{user.name}</Link> 
              </li>
            </ul>
          ))
        }
        </div>
  )
}

export default Users